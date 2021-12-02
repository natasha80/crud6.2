import Note from "./Note";
import PropTypes from "prop-types";

const NotesList = (props) => {
    return (
        <div className="notes-list">
            {props.notes.map(note =>
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.content}
                    deleteNote={props.deleteNote}
                />
            )}
        </div>
    );
};

NotesList.propTypes = {
    notes: PropTypes.array.isRequired,
    deleteNote: PropTypes.func.isRequired
}

export default NotesList;