import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { CommonModule, NgFor, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css',
})
export class NoteCardComponent implements OnInit {
  constructor(private notesService: NotesService) {}

  //store notes from a user
  notes: any[] = [];

  //fetch notes of a user
  fetchNotes() {
    this.notesService.fetchNotes(39).subscribe({
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
  noteDescriptionChange(noteId: number, event: Event):void {
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
  updateNote(noteId: number, updatedDescription: string):void {
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
      event.dataTransfer.setData('text/plain', note.note_id.toString());
    }
  }


  onDragEnd(event: DragEvent): void {
    const target = event.currentTarget as HTMLElement;
    target.classList.remove('dragging');
  }

  ngOnInit(): void {
    this.fetchNotes();
  }
}
