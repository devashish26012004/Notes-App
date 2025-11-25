import { useState } from "react";
import AddNote from "./components/AddNote";
import AllNotes from "./components/AllNotes";

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [editableNote, setEditableNote] = useState(null);

  const addNewNote = (note) => {
    const newNote = { id: Date.now(), ...note };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const startEdit = (note) => {
    setEditableNote(note);
  };

  const updateNote = (updatedNote) => {
    setNotes(
      notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
    setEditableNote(null);
  };

  return (
    <>
      <AddNote
        addNewNote={addNewNote}
        editableNote={editableNote}
        updateNote={updateNote}
      />

      <AllNotes notes={notes} deleteNote={deleteNote} startEdit={startEdit} />
    </>
  );
};

export default NotesApp;
