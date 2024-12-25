import { Component } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css',
})
export class AddButtonComponent {
  userId: number = 39;
  noteDescription = 'This is a docket';

  constructor(private notesService: NotesService, userServices:UserService) {}

  createNote() {
    console.log(this.userId)
    this.notesService
      .createNote({userId:39, noteDescription:this.noteDescription})
      .subscribe((response) => console.log(response));
  }

  createNoteCard(color: string) {
    const notes = document.querySelector('.notes');
    this.createNote()
    const card = document.createElement('div');
    card.classList.add('note-card');
    card.setAttribute('contentEditable', 'true');
    card.style.backgroundColor = color;
    card.innerHTML = `<p>${this.noteDescription}<p>`;

    notes?.prepend(card);
  }
}
