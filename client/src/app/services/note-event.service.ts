import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteEventService {
  constructor() {}

  private noteAddedSource = new Subject<void>();
  private noteDeletedSource = new Subject<number>();

  noteAdded = this.noteAddedSource.asObservable();
  noteDeleted = this.noteDeletedSource.asObservable();

  notifyNoteAdded(): void {
    this.noteAddedSource.next();
  }

  notifyNoteDeleted(noteId: number) {
    this.noteDeletedSource.next(noteId);
  }
}
