import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { fetchNoteInterface, InsertNoteInterface, UpdateNoteInterface } from '../interfaces/note.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotesService {

  SERVER = `${environment.SERVER}/notes`;

  constructor(private http: HttpClient) {}
  createNote(noteData:InsertNoteInterface):Observable<InsertNoteInterface>{
    return this.http.post<InsertNoteInterface>(`${this.SERVER}/addnote`, noteData)
  }


  fetchNotes(userId:number):Observable<fetchNoteInterface[]>{
    return this.http.get<fetchNoteInterface[]>(`${this.SERVER}/fetchnote/${userId}`)
  }

  updateNotes(noteId:number, noteDescription:string):Observable<UpdateNoteInterface>{
    return this.http.put<UpdateNoteInterface>(`${this.SERVER}/modifynote/${noteId}`, {noteDescription})
  }
}
