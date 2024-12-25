import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-notes-page',
  standalone: true,
  imports: [],
  templateUrl: './notes-page.component.html',
  styleUrl: './notes-page.component.css',
})
export class NotesPageComponent implements OnInit {
  constructor(private notesService: NotesService) {}

notes:any []= []

  ngOnInit(): void {
    this.fecthNote();
  }
  fecthNote() {
    this.notesService.fetchNotes(39).subscribe({
      next:(response)=>{
        this.notes =response
        console.log(this.notes)
        this.notes
      }
    });
  }
}
