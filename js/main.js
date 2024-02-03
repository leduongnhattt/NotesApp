import NotesView from "./NotesView.js";
import NotesAPI from "./NotesAPI.js";

const root = document.getElementById("app");
const view = new NotesView(root, {
  onNoteAdd() {
    console.log("Let's add a note");
  },
  onNoteSelect(id) {
    view.updateActiveNote(notes[0]);
  },
  onNoteDelete(id) {
    console.log('Note deleted.', id);
  },
  onNoteEdit(newTitle, newBody) {
    console.log(newTitle);
    console.log(newBody);
  },
});

const notes = NotesAPI.getAllNotes();
view.updateNoteList(notes);
view.updateActiveNote(notes[0]);
