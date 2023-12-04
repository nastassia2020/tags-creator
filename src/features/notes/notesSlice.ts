import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchNote } from "./notesAPI";
import { v4 as uuid } from "uuid";

export interface Note {
  note: string;
  id: string;
}

export interface NoteState {
  notes: Note[];
  status: "idle" | "loading" | "failed";
}

const initialState: NoteState = {
  notes: [],
  status: "idle",
};

export const getNotes = createAsyncThunk(
  "note/fetchNote",
  async (notes: Note[]) => {
    const response = await fetchNote(notes);
    return response.data;
  }
);

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNewNote: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        state.notes.push({ id: uuid(), note: action.payload });
      }
    },
    deleteNote: (state, action: PayloadAction<string>) => {
        state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    changeNote: (state, action: PayloadAction<Note>) => {
      state.notes.map((note) =>
        note.id === action.payload.id ? (note.note = action.payload.note) : note
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getNotes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getNotes.fulfilled, (state, action) => {
        state.status = "idle";
        state.notes = action.payload;
      })
      .addCase(getNotes.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { addNewNote, deleteNote, changeNote } = noteSlice.actions;

export const selectNotes = (state: RootState) => state.notes.notes;

export default noteSlice.reducer;
