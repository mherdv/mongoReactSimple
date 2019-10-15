import { GETNOTES, ADDNOTE, LOADING, DELETENOTE } from "../types";
import APINotes from '../../APIs/APINotes';

export const getAllNotes = () => async (dispatch) => {

    dispatch({ type: LOADING })
    return await APINotes.getNotesList().then(({ data }) => {

        dispatch({ type: GETNOTES, notes: data });
    })
}

export const deleteNote = (id) => async (dispatch) => {
    dispatch({ type: LOADING });
    return await APINotes.deleteNote(id).then(({ data }) => {
        dispatch({ type: DELETENOTE, notes: [...data] })
    })
}

export const addNote = (data) => async (dispatch) => {
    dispatch({ type: LOADING });
    return await APINotes.addNote(data).then(({ data }) => {
        dispatch({ type: ADDNOTE, data })
    })
}