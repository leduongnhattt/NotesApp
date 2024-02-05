
import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";

export default class App {
    constructor(root) {
        this.notes = [];
        this.activeNote = null;
        this.view = new NotesView(root, this._handler());

        this._refreshNote();
    }

    _refreshNote() {
        const notes = NotesAPI.getAllNotes();
       // console.log(notes);
        this._setNotes(notes);

        if(notes.length > 0) {
            this._setActiveNote(notes[0]);
        }
    }

    _setNotes(notes) {
        this.notes = notes;
        this.view.updateNoteList(notes);
        this.view.updateNotePreviewVisibility(notes.length > 0);
    }
    _setActiveNote(note) {
        this.activeNote = note;
        this.view.updateActiveNote(note);
    }

    _handler() {
        return {
            onNoteSelect: noteId => {
                const selectedNote = this.notes.find(note => note.id == noteId);
                this._setActiveNote(selectedNote);
            },
            onNoteAdd: () => {
                const newNote = {
                    title: 'New Note',
                    content: 'Take Note ...'
                };

                NotesAPI.saveNote(newNote);
                this._refreshNote();
            },
            onNoteEdit: (title, content) => {
                NotesAPI.saveNote({
                    id: this.activeNote.id,
                    title,
                    content,
                });
            },
            onNoteDelete: (noteId) => {
                NotesAPI.deleteNote(noteId);
                this._refreshNote()
            },
        };
    }
}