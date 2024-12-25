

export interface InsertNoteInterface {
  userId: number | null | undefined;
  noteDescription: string | null | undefined;
}

export interface fetchNote extends InsertNoteInterface {
  noteId: number;
  time_created:string;
  
}
