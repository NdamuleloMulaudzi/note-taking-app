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


  //create a new note whith different colors
  createNote(color: string) {
    this.notesService
      .createNote({
        userId: this.userServices.getUserId(),
        noteDescription: this.noteDescription,
        color: color,
      })
      .subscribe({
        next: () => {
          console.log(this.userServices.getUserId());
          //this notifies that a new note was added and tells NoteCardComponent it needs to call the fetchNote function
          this.noteEventService.notifyNoteUpdated();
        },
        error: (err) => console.error('Error creating note:', err),
      });
  }
}
