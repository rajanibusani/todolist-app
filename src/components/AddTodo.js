import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");
    const [visible, setVisible] = useState(false)

    const minDate = () => {
        const day = new Date();
        let dd = day.getDate();
        let mm = day.getMonth() + 1; //January is 0!
        const yyyy = day.getFullYear();
        dd = dd < 10 ? '0' + dd : dd;
        mm = mm < 10 ? '0' + mm : mm;
        const today = yyyy + '-' + mm + '-' + dd;
        return today;
    }
    const onClick = () => {
        setVisible(!visible)
        addTodo(description, deadline)
        setDescription("")
        setDeadline("")
        return
    }
    return (
        <div className="add-todo">
            {visible &&
                <div>
                    <input type="text" placeholder="enter task description" name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)}></input>

                    <input type="date" className="input-text" name="deadline" id="deadline" min={minDate()} value={deadline} onChange={(e) => setDeadline(e.target.value)}></input>
                </div>
            }
            <button onClick={onClick}>{!visible ? "Add Task" : "Save Task"} </button>
        </div>

    )
}
export default AddTodo;