import { useEffect, useState } from 'react';
import { Note } from '../models/note';
import NoteComponent from "../Note";
import "./styles.css";

export default function Notes() {
    const [myNotes, setMyNotes] = useState<Note[]>([]);
    const getNotes = () => {
        setMyNotes([
            { id: 1, title: 'My first note', content: 'meu conteúdo' },
            { id: 2, title: 'título', content: 'conteúdo' },
            { id: 3, title: 'título', content: 'conteúdo' },
            { id: 4, title: 'título', content: 'conteúdo' },
        ]);
    };
    const handleNewNote = (note: Note) => {
        setMyNotes((notes) => [ ...notes, { ...note, id: notes.length } ]);
    };
    const handleDeleteNote = (note: Note) => {
        setMyNotes((notes) => notes.filter(notes => notes.id !== note.id));
    };

    useEffect(() => {
        getNotes();
    }, []);

    return (
        <div className='notesContainer'>
            {myNotes.map((note, index) => <NoteComponent {...note} handleDeleteNote={handleDeleteNote} key={index} />)}
            <NoteComponent isNewNote={true} handleNewNote={handleNewNote} />
        </div>
    );
}
