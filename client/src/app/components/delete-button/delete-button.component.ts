import { Component } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { NoteEventService } from '../../services/note-event.service';

@Component({
  selector: 'app-delete-button',
  standalone: true,
  imports: [],
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.css',
})
export class DeleteButtonComponent {
  isDragOver: boolean = false;

  constructor(
    public notesService: NotesService,
    private noteEventService: NoteEventService
  ) {}

  //removes note
  removeNote(noteId: number) {
    this.notesService.deleteNote(noteId).subscribe({
      next: (res) => {
        console.log('Note deleted:', res);

        // Notify  the deletation of a note and tells NoteCardComponent it needs to call the fetchNote function
        this.noteEventService.notifyNoteUpdated();
      },
      error: (err) => {
        console.error('Error deleting a note: ', err);
      },
    });
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;

    const noteId = event.dataTransfer?.getData('text/plain');

    const confirmDelete = window.confirm(
      'Are you sure you want to delete this note?'
    );
    if (confirmDelete && noteId) {
      this.removeNote(Number(noteId));
    } else {
      console.log('Delete action canceled.');
    }
  }
}
