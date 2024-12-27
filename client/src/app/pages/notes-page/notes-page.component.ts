import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { NoteCardComponent } from "../../components/note-card/note-card.component";

@Component({
  selector: 'app-notes-page',
  standalone: true,
  imports: [NoteCardComponent],
  templateUrl: './notes-page.component.html',
  styleUrl: './notes-page.component.css',
})
export class NotesPageComponent {
  constructor(private notesService: NotesService) {}
}
