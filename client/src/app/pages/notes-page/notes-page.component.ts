import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { NoteCardComponent } from "../../components/note-card/note-card.component";
import { UserService } from '../../services/user.service';
import { NoteEventService } from '../../services/note-event.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-notes-page',
  standalone: true,
  imports: [NoteCardComponent,],
  templateUrl: './notes-page.component.html',
  styleUrl: './notes-page.component.css',
})
export class NotesPageComponent implements OnInit {
  notes: any[] = [];
  constructor(private notesService: NotesService, private userService:UserService, private noteEventService:NoteEventService) {}
  ngOnInit(): void {
   
    // this.fetchNotes();
  

    // Refresh notes when a note is added or deleted
    this.noteEventService.noteUpdated.subscribe(() => {
      // this.fetchNotes();
    });
  }
  

  //fetch notes of a user
  fetchNotes() {
    this.notesService.fetchNotes(this.userService.getUserId()).subscribe({
      next: (response) => {
        this.notes = response;
        console.log(this.notes);
        console.log(this.userService.getUserId().user.id);
      },
      error: (err) => {
        console.error('Error fetching notes: ', err);
      },
    });
  }
}
