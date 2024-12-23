

export interface InsertNoteInterface {
  userId: number;
  noteDescription: string;
}

export interface fetchNote extends InsertNoteInterface {
  noteId: number;
  time_created:string;
  
}
