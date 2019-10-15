import mongoose from 'mongoose';

import '../models/notes';

const Note = mongoose.model("Note");


export function setUpConnection() {
    mongoose.connect(`mongodb://localhost/notes`)
}

export function listNotes() {
    return Note.find();
}


export function createNote({ title, text, color }) {
    const note = new Note({
        title,
        text,
        color,
        date: new Date()
    })
    return note.save()
}

export function deleteNode(id) {
    return Note.findById(id).remove();

}