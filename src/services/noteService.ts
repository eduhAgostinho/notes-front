import axios from "axios";
import { Note } from "../models/note";

const BASE_URL = '/notes';

export const getNotes = () => {
    return axios.get(BASE_URL).then(result => result ? result.data : []).catch(error => []);
}

export const createNote = (note: Note) => {
    return axios.post(BASE_URL, note);
}

export const deleteNote = (id: number) => {
    return axios.delete(`${BASE_URL}/${id}`);
}