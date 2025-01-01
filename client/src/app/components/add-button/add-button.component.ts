import { Component } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { UserService } from '../../services/user.service';
import { NoteEventService } from '../../services/note-event.service';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css',
})
export class AddButtonComponent {
  noteDescription = 'This is a docket';

  constructor(
    private notesService: NotesService,
    public userServices: UserService,
    private noteEventService: NoteEventService
  ) {}

  createNote(color: string) {
    this.notesService
      .createNote({
        userId: this.userServices.getUser().user_id,
        noteDescription: this.noteDescription,
        color: color,
      })
      .subscribe({
        next: () => {
          this.noteEventService.notifyNoteAdded();
        },
        error: (err) => console.error('Error creating note:', err),
      });
  }

  // createNoteCard(color: string) {
  //   const notes = document.querySelector('.notes');
  //   this.createNote()
  //   const card = document.createElement('div');
  //   card.classList.add('note-card');
  //   card.setAttribute('contentEditable', 'true');
  //   card.style.backgroundColor = color;
  //   card.innerHTML = `<p>${this.noteDescription}<p>`;

  //   notes?.prepend(card);
  // }
}
