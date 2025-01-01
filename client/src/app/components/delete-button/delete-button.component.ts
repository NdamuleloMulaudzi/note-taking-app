import { Component, HostBinding } from '@angular/core';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-delete-button',
  standalone: true,
  imports: [],
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.css',
})
export class DeleteButtonComponent {
  isDragOver: boolean = false;

  constructor(public notesService: NotesService) {}

  removeNote(noteId: number) {
    this.notesService.deleteNote(noteId).subscribe({
      next: (res) => {
        console.log(res);
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
    this.isDragOver;

    const noteId = event.dataTransfer?.getData('text/plain');

    const confirmDelete = window.confirm(
      'Are you sure you want to delete this note?'
    );
    if (confirmDelete) {
      this.removeNote(Number(noteId));
    } else {
      console.log('Delete action canceled.');
    }
  }
}
