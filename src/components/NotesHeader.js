import PropTypes from "prop-types";

const NotesHeader = (props) => {
    return (
        <div className="notesHeader-container">
            <h1 className="main-title">Заметки</h1>
            <button className="btn btn-update" onClick={props.updateNotes}>Обновить</button>
        </div>
    );
};

NotesHeader.propTypes = {
    updateNotes: PropTypes.func.isRequired
}

export default NotesHeader;