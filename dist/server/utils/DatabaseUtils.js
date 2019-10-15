'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setUpConnection = setUpConnection;
exports.listNotes = listNotes;
exports.createNote = createNote;
exports.deleteNode = deleteNode;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

require('../models/notes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Note = _mongoose2.default.model("Note");

function setUpConnection() {
    _mongoose2.default.connect('mongodb://localhost/notes');
}

function listNotes() {
    return Note.find();
}

function createNote(_ref) {
    var title = _ref.title,
        text = _ref.text,
        color = _ref.color;

    var note = new Note({
        title: title,
        text: text,
        color: color,
        date: new Date()
    });
    return note.save();
}

function deleteNode(id) {
    return Note.findById(id).remove();
}