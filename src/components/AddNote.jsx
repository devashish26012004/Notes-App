import { useEffect, useState } from "react";

const AddNote = ({ addNewNote, editableNote, updateNote }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (editableNote) {
      setTitle(editableNote.title);
      setDescription(editableNote.description);
      setIsEdit(true);
    }
  }, [editableNote]);

  const handleSave = () => {
    if (isEdit) {
      updateNote({ id: editableNote.id, title, description });
      setIsEdit(false);
    } else {
      addNewNote({ title, description });
    }

    setTitle("");
    setDescription("");
  };

  return (
    <div className="border-2 flex justify-center flex-col gap-5 w-2xl mx-auto my-10 p-7 shadow-2xl rounded-xl bg-white">
      <h1 className="m-auto text-3xl text-blue-950 font-bold font-serif">
        Notes App
      </h1>

      <input
        type="text"
        placeholder="Enter title"
        className="border p-1.5"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter description"
        className="border p-1.5 h-40"
      ></textarea>

      <button
        onClick={handleSave}
        className="bg-[#4F8FF0] hover:bg-[#305ea8] text-white font-semibold py-2 px-4 border shadow rounded w-28 mx-auto cursor-pointer"
      >
        {isEdit ? "Update" : "Save"}
      </button>
    </div>
  );
};

export default AddNote;
