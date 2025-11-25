const AllNotes = ({ notes, deleteNote, startEdit }) => {
  return (
    <>
      <div className="w-2xl mx-auto my-5">
        <hr />
        <h2 className="text-2xl font-bold mb-4 text-center">All Notes</h2>

        <div className="grid grid-cols-1 gap-4">
          {notes.map((note) => (
            <div
              key={note.id}
              className="border p-4 rounded bg-white shadow-lg"
            >
              <h3 className="font-bold text-xl text-[#0A2342]">{note.title}</h3>
              <p className="mt-2 text-[#444]">{note.description}</p>

              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => startEdit(note)}
                  className="bg-yellow-300 hover:bg-[#eeb817] w-23 py-1 rounded cursor-pointer"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteNote(note.id)}
                  className="bg-red-500 hover:bg-[#ca1616] w-23 py-1 rounded cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllNotes;
