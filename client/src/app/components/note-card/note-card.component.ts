import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { CommonModule, NgFor, UpperCasePipe } from '@angular/common';
import { UserService } from '../../services/user.service';
import { AddButtonComponent } from '../add-button/add-button.component';
import { NoteEventService } from '../../services/note-event.service';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css',
})
export class NoteCardComponent implements OnInit {
  constructor(
    private notesService: NotesService,
    private userService: UserService,
    private noteEventService: NoteEventService
  ) {}

  //store notes from a user
  notes: any[] = [];

  ngOnInit(): void {
    this.fetchNotes();
    this.noteEventService.noteAdded.subscribe(() => {
      this.fetchNotes();
    });
  }

  //fetch notes of a user
  fetchNotes() {
    this.notesService.fetchNotes(this.userService.getUser().user_id).subscribe({
      next: (response) => {
        this.notes = response;
        console.log(this.notes);
      },
      error: (err) => {
        console.error('Error fetching notes: ', err);
      },
    });
  }

  //handles the changes when the note description is being changed
  noteDescriptionChange(noteId: number, event: Event): void {
    const updatedDescription = (
      event.target as HTMLElement
    ).textContent?.trim();
    const noteToUpdate = this.notes.find((note) => note.note_id === noteId);

    if (noteToUpdate) {
      noteToUpdate.note_description = updatedDescription || '';
      this.updateNote(noteId, updatedDescription || '');
    }
  }

  //update the note descreption
  updateNote(noteId: number, updatedDescription: string): void {
    this.notesService
      .updateNotes(noteId, updatedDescription)
      .subscribe((res) => console.log('Note updated:', res));
  }

  // Toggle the editable state for note description
  toggleEdit(note: any) {
    note.isEditable = !note.isEditable;
  }

  //decrease the opacity of the card when dragged && transfer the noteId to the delete-button delete
  onDragStart(event: DragEvent, note: any): void {
    const target = event.currentTarget as HTMLElement;
    target.classList.add('dragging');
    if (event.dataTransfer) {
      event.dataTransfer.setData('text/plain', note.note_id);
    }
  }

  onDragEnd(event: DragEvent): void {
    const target = event.currentTarget as HTMLElement;
    target.classList.remove('dragging');
  }
}
