import React from 'react';
import Masonry from 'react-masonry-component';
import OneNote from '../OneNote';

const masonryOptions = {

    columnWidth: 200,

};


const NotesGrid = ({ notes, onNoteDelete }) => {

    return (


        <div>
            <Masonry
                options={masonryOptions}
            >
                {notes.map((props) => {
                    return <OneNote {...props} onNoteDelete={onNoteDelete} key={props._id} />
                })}
            </Masonry>
        </div>
    );
};

export default NotesGrid;