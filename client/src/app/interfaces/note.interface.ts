export interface InsertNoteInterface {
  userId: number | null | undefined;
  noteDescription: string | null | undefined;
  color: string | null | undefined;
}

export interface fetchNoteInterface extends InsertNoteInterface {
  noteId: number;
  time_created: string;
}
export interface UpdateNoteInterface {
  nodeId: number | null | undefined;
  noteDescription: string | null | undefined;
}
