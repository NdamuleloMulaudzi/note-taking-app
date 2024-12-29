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

  @HostBinding('class.drag-over') isDragOver = false;

  onDragEnter(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault(); // Necessary for drop event to trigger
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    this.isDragOver = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;

    const noteId = event.dataTransfer?.getData('text/plain');
    if (noteId) {
      this.removeNote(Number(noteId));
    }
    // Handle the drop logic here
    console.log('Card dropped on delete button');
  }
}
