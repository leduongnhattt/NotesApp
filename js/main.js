
import NotesView from "./NotesView.js";
import NotesAPI from "./NotesAPI.js";

const root = document.getElementById("app");
const view = new NotesView(root, {
    onNoteAdd() {
        console.log("Let's add a note");
    },
    onNoteSelect(id) {
        console.log("Note has selected " , id);
    },
    onNoteEdit(newTitle, newBody){
        console.log(newTitle);
        console.log(newBody);
    }
});

view.updateNoteList(NotesAPI.getAllNotes());
