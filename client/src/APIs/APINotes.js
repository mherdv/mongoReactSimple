import axios from 'axios';

import { APIPrefix } from '../constants/configs';


export default {
    getNotesList() {
        return axios.get(`${APIPrefix}/notes`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    addNote(data) {
        return axios.post(`${APIPrefix}/notes`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    deleteNote(id) {
        return axios.delete(`${APIPrefix}/notes/${id}`)
    }

}