import { GETNOTES, DELETENOTE, ADDNOTE, LOADING } from "../types";

const initialState = {
    notes: [],
    loading: false
}

export default function notesReducer(state = initialState, action) {

    switch (action.type) {
        case LOADING:
            return { notes: state.notes, loading: true }
        case GETNOTES:
            return { notes: action.notes, loading: false }
        case DELETENOTE:
            return { notes: action.notes, loading: false }
        case ADDNOTE:
            return { notes: [...state.notes, action.data], loading: false }
        default:
            return state;
    }
}