"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var NotesSchema = new Schema({
    title: { type: String },
    text: { type: String, required: true },
    color: { type: String },
    date: { type: Date }
});

var Note = _mongoose2.default.model("Note", NotesSchema);