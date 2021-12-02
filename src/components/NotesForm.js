import {useState} from "react";
import PropTypes from "prop-types";

const NotesForm = (props) => {
    const [textareaValue, setTextareaValue] = useState();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (textareaValue === '') {
            return;
        }
        props.addNewNote(textareaValue);
        setTextareaValue('');
    };

    const onChangeHandler = (e) => {
        setTextareaValue(e.target.value);
    };

    return (
        <form className="newNote-form" onSubmit={onSubmitHandler}>
            <label htmlFor="addNewNote">Новая заметка</label>
            <textarea
                className="newNote-text"
                name="newNoteText"
                id="addNewNote"
                onChange={onChangeHandler}
                value={textareaValue}
            />
            <button type="submit" className="btn form-btn">Добавить</button>
        </form>
    );
};

NotesForm.propTypes = {
    addNewNote: PropTypes.func.isRequired
}

export default NotesForm;