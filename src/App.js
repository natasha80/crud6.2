import './App.css';
import NotesHeader from "./components/NotesHeader";
import NotesList from "./components/NotesList";
import NotesForm from "./components/NotesForm";
import {useEffect, useState} from "react";
import createRequest from "./api/createRequest";

function App() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await createRequest({method: 'get'});
            setNotes([...response]);
        };
        fetchData();
    }, []);

    const updateNotesHandler = async () => {
        const response = await createRequest({method: 'get'});
        setNotes([...response]);
    }

    const addNewNoteHandler = async (note) => {
        try {
            const payload = {
                content: note
            };
            await createRequest({payload, method: 'post'});
            const response = await createRequest({method: 'get'});
            setNotes([...response]);
        } catch (err) {
            return <p>Error: {err}</p>;
        }
    };

    const deleteNoteHandler = async (id) => {
        await createRequest({id, method: 'delete'});
        const response = await createRequest({method: 'get'});
        setNotes([...response]);
    };

    return (
        <div className="App">
            <NotesHeader updateNotes={updateNotesHandler} />
            <div className="notes-body">
                <NotesList notes={notes} deleteNote={deleteNoteHandler} />
                <NotesForm addNewNote={addNewNoteHandler} />
            </div>
        </div>
    );
}

export default App;