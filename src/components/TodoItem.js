import { useState } from "react";
import { RiCloseCircleLine, RiChatUploadLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

import PropTypes from 'prop-types';
const TodoItem = ({ id, description, deadline, deleteTodo, editTodo }) => {
    const [checked, setChecked] = useState(false);
    const [display, setDisplay] = useState(false);
    const [newDescription, setNewdescription] = useState(description);
    const onClick = () => {
        setDisplay(!display)
        return editTodo(id, newDescription)

    }
    return (
        <li className="todo">
            <div className="todo-text">
                <input type="checkbox" value={checked} onChange={() => setChecked(!checked)}></input>
                {display && <input type="text" className="edit-input" name="description" value={newDescription} onChange={(e) => setNewdescription(e.target.value)}></input>}
                {!display && <div className="todo-description">
                    <h3 className={`${checked ? "checkedTodo" : ""}`}>Task:  {description} </h3>
                    <p>Deadline: {deadline}</p>
                </div>
                }
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                    onClick={() => deleteTodo(id)}
                    className='delete-icon'
                />
                {!display ?
                    <TiEdit
                        onClick={onClick}
                        className='edit-icon'
                    />
                    : <RiChatUploadLine onClick={onClick} className="update-icon" />
                    // : <button onClick={onClick}>Update</button>
                }
            </div>
            {/* <div>
                <button onClick={() => deleteTodo(id)}>Delete</button>
                <button onClick={onClick}>{!display ? "Edit" : "Update"} </button>
            </div> */}
        </li>

    )
}

TodoItem.propTypes = {
    id: PropTypes.number,
    description: PropTypes.string,
    deadline: PropTypes.string,
    deleteTodo: PropTypes.func,
    editTodo: PropTypes.func
};


export default TodoItem;
