import { useState } from 'react';
import { Card } from 'primereact/card';
import { Note as NoteModel} from '../models/note';
import './styles.css';

type handleNoteAction = (note:NoteModel) => void;

export default function Note({ id, title = '', content = '', isNewNote = false, handleNewNote = undefined, handleDeleteNote = undefined}:
    { id?: number, title?: string, content?: string, isNewNote?: boolean, handleNewNote?: handleNoteAction, handleDeleteNote?: handleNoteAction }) {
    
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    
    function resetInputs() {
        setNewTitle('');
        setNewContent('');
    }

    const Icon = () => {
        const color =  isNewNote ? 'green' : 'red';
        const iconType =  isNewNote ? 'check' : 'trash';
        const noteOutput = isNewNote ? { title: newTitle, content: newContent } : { id, title, content };
        const onClickHandle = () => {
            let outputFunction = handleDeleteNote;
            if (isNewNote) { 
                resetInputs()
                outputFunction = handleNewNote;
            };

            if (outputFunction) outputFunction(noteOutput as NoteModel)
        };
        return <i onClick={onClickHandle} style={{ color }} className={`pi pi-${iconType}`}></i>;
    };

    const TitleContainer = () => (
        <div className='titleContainer'>
            <div>{isNewNote ? <input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} className='titleInput' /> : title}</div>
            <Icon />
        </div>
    );
    
    return (
        <Card title={TitleContainer} style={{ width: '25rem', margin: '10px' }}>
            {isNewNote ? <textarea onChange={(e) => setNewContent(e.target.value)} value={newContent} className='contentInput' /> : <span style={{ whiteSpace: 'pre-line' }}>{content}</span>}
        </Card>
    );
}
