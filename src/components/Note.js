import {useRef} from "react";
import PropTypes from "prop-types";

const Note = (props) => {
    const ref = useRef();
    const onDeleteBtnClickHandler = () => {
        props.deleteNote(props.id);
    };

    return (
        <div ref={ref} className="note" data-id={props.id}>
            <p className="note-text">{props.text}</p>
            <div className="delete-btn" onClick={onDeleteBtnClickHandler}>x</div>
        </div>
    );
};

Note.propType = {
    id: PropTypes.number.isRequired,
    text:PropTypes.string.isRequired,
    deleteNote: PropTypes.func.isRequired
}

export default Note;