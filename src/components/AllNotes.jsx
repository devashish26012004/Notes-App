const AllNotes = ({ notes }) => {
  return (
    <div className="w-2xl mx-auto my-5">
      <h2 className="text-2xl font-bold mb-4 text-center">All Notes</h2>

      <div className="grid grid-cols-1 gap-4">
        {notes.map((note, index) => (
          <div key={index} className="border p-4 rounded bg-white shadow">
            <h3 className="font-bold text-xl">{note.title}</h3>
            <p className="mt-2">{note.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllNotes;
