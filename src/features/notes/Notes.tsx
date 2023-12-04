import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectNotes, addNewNote, deleteNote, changeNote } from "./notesSlice";

function Notes() {
  const notes = useAppSelector(selectNotes);
  const dispatch = useAppDispatch();
  const [note, setNote] = useState('');


  return <div>Notes</div>;
}

export default Notes;
