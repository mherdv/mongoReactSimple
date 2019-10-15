import React, { useEffect } from 'react';
import NotesEditor from './NotesEditor';
import NotesGrid from './NotesGrid';
import classes from './notes.module.scss';
import { connect } from 'react-redux';
import { getAllNotes, addNote, deleteNote } from '../../redux/actions/notesAction';

const Notes = (props) => {

    useEffect(() => {
        props.dispatch(getAllNotes())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handelNoteAdd(data) {
        props.dispatch(addNote(data));
    }
    function handelNoteDelete(id) {
        props.dispatch(deleteNote(id))
    }

    return (
        <div className={classes.notes}>
            <NotesEditor onNoteAdd={handelNoteAdd} />
            <NotesGrid notes={props.notes} onNoteDelete={handelNoteDelete} />

        </div>
    );
};


function mapStateToProps({ notesStore }) {
    return {
        notes: notesStore.notes,
        loading: notesStore.loading
    }
}
export default connect(mapStateToProps)(Notes);