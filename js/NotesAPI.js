export default class NotesAPI {
    static getAllNotes() {
        
         var notes = JSON.parse(localStorage.getItem('notesapp-notes')) || [];
        return notes;
    }

    static saveNote(noteToSave) {
        var notes = NotesAPI.getAllNotes();
        const existing = notes.find(note => note.id == noteToSave.id);
        console.log(existing);
        if(existing) {
            existing.title = noteToSave.title;
            existing.content = noteToSave.content;
            existing.updated = new Date().toISOString();
        }
        else {
            noteToSave.id = Math.floor(Math.random() * 1000000);
            noteToSave.updated = new Date().toISOString();
            notes.push(noteToSave);
        }
       

        localStorage.setItem('notesapp-notes', JSON.stringify(notes));
    }
    static deleteNote(id) {
        var notes = NotesAPI.getAllNotes();
        const newNote = notes.filter(note => note.id != id);

        localStorage.setItem('notesapp-notes', JSON.stringify(newNote));
    }
}