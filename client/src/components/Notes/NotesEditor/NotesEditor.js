import React, { useState } from 'react';
import classes from './noteEditor.module.scss';

import { SketchPicker } from 'react-color';


const NotesEditor = (props) => {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [color, setColor] = useState('#FFFFFF');


    function handleColorChange(color) {
        setColor(color.hex)
    }
    function handelTextChange(event) {
        setText(event.target.value)
    }

    function handleTitleChange(event) {
        setTitle(event.target.value)
    }
    function addNote() {
        const newNote = {
            title,
            text,
            color
        }
        props.onNoteAdd(newNote);
    }
    function setInitialStates() {
        setColor('#FFFFFF');
        setTitle('');
        setText('');
    }
    function handelNotsAdd() {
        addNote()
        setInitialStates()
    }



    return (
        <div className={classes.container}>
            <div>

                <input
                    type="text"
                    value={title}
                    placeholder="enter title"
                    onChange={handleTitleChange}
                    className={classes.noteTitle}
                />
            </div>

            <div>
                <textarea
                    placeholder="enter note text"
                    rows={5}
                    className={classes.noteText}

                    value={text}
                    onChange={handelTextChange}
                />
            </div>

            <div className={classes.sketchContainer}>

                <SketchPicker onChangeComplete={handleColorChange} color={color} />
            </div>

            <div className={classes.NotesEditorFooter}>
                <button
                    onClick={handelNotsAdd}
                    disabled={!text}
                    className={classes.sendButton}

                > add </button>
            </div>

        </div>
    );
};


export default NotesEditor;