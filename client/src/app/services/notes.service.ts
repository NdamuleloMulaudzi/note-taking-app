import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsertNoteInterface } from '../interfaces/note.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotesService {

  SERVER = environment.SERVER;

  constructor(private http: HttpClient) {}
  createNote(noteData:InsertNoteInterface):Observable<InsertNoteInterface>{
    return this.http.post<InsertNoteInterface>(`${this.SERVER}/notes/addnote`, noteData)
  }

}
