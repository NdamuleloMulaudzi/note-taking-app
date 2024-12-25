

export interface InsertNoteInterface {
  userId: number | null | undefined;
  noteDescription: string | null | undefined;
}

export interface fetchNoteInterface extends InsertNoteInterface {
  noteId: number;
  time_created:string;
  
}
