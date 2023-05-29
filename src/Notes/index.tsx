import { useEffect, useState } from 'react';
import { Note } from '../models/note';
import NoteComponent from "../Note";
import "./styles.css";
import * as noteService from '../services/noteService';

export default function Notes() {
    const [myNotes, setMyNotes] = useState<Note[]>([]);
    const getNotes = async () => {
        const notes = await noteService.getNotes();
        
        setMyNotes(notes);
    };
    const handleNewNote =  async (note: Note) => {
        await noteService.createNote(note);
        getNotes();
    };
    const handleDeleteNote = async (note: Note) => {
        await noteService.deleteNote(note.id);
        getNotes();
    };

    useEffect(() => {
        getNotes();
    }, []);

    return (
        <>
            <h1>Minhas notas ({myNotes.length}/20)</h1>
            <div className='notesContainer'>
                {myNotes.map((note, index) => <NoteComponent {...note} handleDeleteNote={handleDeleteNote} key={index} />)}
                <NoteComponent isNewNote={true} handleNewNote={handleNewNote} />
            </div>
        </>
    );
}
