import { useState } from "react";
import "./App.css";

function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  const formHandler = (event) => {
    event.preventDefault();
    if (noteTitle.trim() === "") return alert("Please enter a valid note");

    editMode === false ? createHandler() : updateHandler();
  };

  const createHandler = () => {
    const newNote = {
      id: Date.now() + "",
      title: noteTitle,
    };
    setNotes([...notes, newNote]);
    setNoteTitle("");
    console.log(newNote);
  };

  const inputHandler = (event) => {
    setNoteTitle(event.target.value);
  };

  const deleteHandler = (id) => {
    setNotes(notes.filter((element) => element.id !== id));
  };

  const editHandler = (note) => {
    setEditMode(true);
    setNoteTitle(note.title);
    setEditableNote(note);
  };

  const updateHandler = () => {
    const newUpdatedNoteList = notes.map((note) => {
      if (note.id === editableNote.id) {
        return { ...note, title: noteTitle };
      }
      return note;
    });
    setNotes(newUpdatedNoteList);
    setEditMode(false);
    setEditableNote(null);
    setNoteTitle("");
  };

  return (
    <div className="app">
      <form onSubmit={formHandler}>
        <input type="text" value={noteTitle} onChange={inputHandler} />
        <button type="submit" className="btn">
          {editMode ? "Update" : "Add Note"}
        </button>
      </form>
      <div className="show-notes">
        <ul>
          {notes.map((note) => (
            <li className="note" key={note.id}>
              <p>{note.title}</p>
              <button
                onClick={() => editHandler(note)}
                className="btn btn-edit"
              >
                Edit
              </button>
              <button
                onClick={() => deleteHandler(note.id)}
                className="btn btn-delete"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
