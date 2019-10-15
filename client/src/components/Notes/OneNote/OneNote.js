import React from 'react';

import classes from './OneNote.module.scss'

const OneNote = ({ color, title, text, _id, onNoteDelete }) => {
    return (
        <div style={{ background: color }} className={classes.container}>
            <h1>{title}</h1>
            <p>{text}</p>
            <button onClick={() => onNoteDelete(_id)}>remove</button>
        </div>
    );
};

export default OneNote;