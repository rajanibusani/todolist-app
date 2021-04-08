import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const arrayOfTodos = [
    {
        id: 1,
        description: "Write grocery list",
        deadline: "2021-06-01"
    },
    {
        id: 2,
        description: "Buy the gift for Maanvi ",
        deadline: "2021-05-19"
    },
    {
        id: 3,
        description: "Book Dr appointment",
        deadline: "2021-05-01"
    },
    {
        id: 4,
        description: "Collect the package from Føtex",
        deadline: "2021-05-01"
    }
];

const TodoList = () => {
    const [todos, setTodos] = useState(arrayOfTodos)
    //adding todo
    const addTodo = (description, deadline) => {
        if (description) {
            const id = Math.floor(Math.random() * (100 - 4 + 1)) + 4;
            const newTodo = { id, description, deadline };
            return setTodos([...todos, newTodo])
        }
    }
    //deleting Todo
    const deleteTodo = (id) => {
        const deleteTodoItem = todos.filter(todo => todo.id !== id);
        setTodos(deleteTodoItem);
    }
    //Editing Todo
    const editTodo = (id, description) => {
        if (description) {
            const editTodos = todos.map(todo => {
                if (todo.id === id) {
                    todo.description = description;
                } return todo
            })
            setTodos(editTodos)
        }
    }
    console.log(todos)

    return (
        <div className="todos-container">
            <ul>
                {todos.length ? todos.map(todo => {
                    return (
                        // <li className="todo-row">
                        <TodoItem key={todo.id} id={todo.id} description={todo.description} deadline={todo.deadline} deleteTodo={deleteTodo} editTodo={editTodo} />
                        // </li>
                    )
                })
                    : <h2>No Todos in List</h2>}
            </ul>
            <AddTodo addTodo={addTodo} />
        </div>
    )
}
export default TodoList;