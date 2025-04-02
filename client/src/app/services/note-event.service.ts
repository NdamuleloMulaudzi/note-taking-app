import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteEventService {

  constructor() { }

  private noteUpdatedSource = new Subject<void>();
  noteUpdated = this.noteUpdatedSource.asObservable();

  notifyNoteUpdated(): void {
    this.noteUpdatedSource.next();
  }
}
