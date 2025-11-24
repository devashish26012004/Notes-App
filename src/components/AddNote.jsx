import { useState } from "react";

const AddNote = ({ addNewNote }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddNote = () => {
    const note = { title, description };
    addNewNote(note);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <div className="border-2 flex justify-center flex-col gap-5 w-2xl mx-auto my-10 p-7 shadow-2xl rounded-xl bg-blue-200">
        <h1 className="m-auto text-3xl text-blue-950 font-bold font-serif">
          Notes App
        </h1>

        <input
          type="text"
          placeholder="Enter the title"
          className="border p-1.5"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Enter description"
          className="border p-1.5 h-40"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button
          onClick={handleAddNote}
          className="bg-white hover:bg-gray-100 text-blue-950 font-semibold py-2 px-4 border shadow rounded w-28 mx-auto cursor-pointer"
        >
          Save Note
        </button>
      </div>
    </div>
  );
};

export default AddNote;
