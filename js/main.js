
import NotesView from "./NotesView.js";

const root = document.getElementById("app");
const view = new NotesView(root, {
    onNoteAdd() {
        console.log("Let's add a note");
    },
    onNoteEdit(newTitle, newBody){
        console.log(newTitle);
        console.log(newBody);
    }
});


