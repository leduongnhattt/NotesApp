export default class NotesView {
    constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}) {
        this.root = root;
        this.onNoteSelect = onNoteSelect;
        this.onNoteAdd = onNoteAdd;
        this.onNoteEdit = onNoteEdit;
        this.onNoteDelete = onNoteDelete;
        this.root.innerHTML = `
            <div class="notes_sidebar">
                <button class="notes_add" type="button">Add Note</button>
                <div class="notes_list"></div>
            </div>
            <div class="notes_preview">
                <input class="notes_title" type="text" placeholder="New Note...">
                <textarea class="notes_body">Take Note...</textarea>
            </div>
        `;

        const btnAddNote = this.root.querySelector(".notes_add");
        const inpTitle = this.root.querySelector(".notes_title");
        const inpBody = this.root.querySelector(".notes_body");

        btnAddNote.addEventListener("click", () => {
            this.onNoteAdd();
        });

        [inpTitle, inpBody].forEach(inputField => {
            inputField.addEventListener("blur", () => {
                const updatedTitle = inpTitle.value.trim();
                const updatedBody = inpBody.value.trim();

                this.onNoteEdit(updatedTitle, updatedBody);
            });
        });

        console.log(this._createListItemHTML(300, "Hey", "Yeah", new Date()));
    }

    _createListItemHTML(id, title, body, updated) {
        const MAX_BODY_LENGTH = 60;

        return `
            <div class="notes_list-item" data-note-id="${id}">
                <div class="notes_small-title">${title}</div>
                <div class="notes_small-body">
                ${body.substring(0, MAX_BODY_LENGTH)}
                ${body.length > MAX_BODY_LENGTH ? "..." : ""}
                </div>
                <div class="notes_small-updated"> ${updated.toLocaleString(undefined, { dateStyle: "full", timeStyle: "short"})}</div>
            </div>
        `;
    }
}