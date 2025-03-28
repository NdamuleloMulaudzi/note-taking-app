import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { CommonModule, NgFor,  } from '@angular/common';
import { UserService } from '../../services/user.service';

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

  isConfirmDeleteVisible:boolean= false
  selectedNoteId:number = 0 

  //store notes from a user
  notes: any[] = [];

  ngOnInit(): void {
    this.userService.getUser()
    this.fetchNotes();
  
    // Refresh notes when a note is added or deleted
    this.noteEventService.noteUpdated.subscribe(() => {
      this.fetchNotes();
    });
  }
  

  //fetch notes of a user
  fetchNotes() {
    this.notesService.fetchNotes(this.userService.getUser().user.id).subscribe({
      next: (response) => {
        this.notes = response;
        console.log(this.notes);
        console.log(this.userService.getUser().user.id);
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

  removeNote(noteId: number) {
    this.notesService.deleteNote(noteId).subscribe({
      next: (res) => {
        console.log('Note deleted:', res);

        // Notify  the deletation of a note and tells NoteCardComponent it needs to call the fetchNote function
        this.noteEventService.notifyNoteUpdated();
        this.isConfirmDeleteVisible = false
      },
      error: (err) => {
        console.error('Error deleting a note: ', err);
      },
    });
  }

  // Toggle the editable state for note description
  toggleEdit(note: any) {
    note.isEditable = !note.isEditable;
  }

  openModal(noteId:number){
    this.isConfirmDeleteVisible = true;
    this.selectedNoteId = noteId

  }
  
}
