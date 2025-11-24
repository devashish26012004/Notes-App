import { useState } from "react";
import AddNote from "./components/AddNote";
import AllNotes from "./components/AllNotes";

const NotesApp = () => {
  const [notes, setNotes] = useState([]);

  const addNewNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <div>
      <AddNote addNewNote={addNewNote} />
      <AllNotes notes={notes} />
    </div>
  );
};

export default NotesApp;
