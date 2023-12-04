import { Note } from './notesSlice'

export function fetchNote(notes: Note[]) {
    return new Promise<{ data: Note[] }>((resolve) =>
      setTimeout(() => resolve({ data: notes }), 500)
    );
  }