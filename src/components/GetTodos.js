import { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo"

const GetTodos = () => {
    const arrayOfTodos = [
        {
            id: 1,
            description: "Write grocery list",
            deadline: "2021-06-01"
        },
        {
            id: 2,
            description: "Buy a gift for a firend",
            deadline: "2021-05-19"
        },
        {
            id: 3,
            description: "Book Dr appointment",
            deadline: "2021-05-01"
        }
    ];
    // const API_URL = "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

    const [todoData, setTododata] = useState(arrayOfTodos)

    //adding todo
    const addTodo = (description, deadline) => {
        if (description && deadline) {
            const id = Math.floor(Math.random() * (100 - 4 + 1)) + 4;
            const newTodo = { id, description, deadline };
            return setTododata([...todoData, newTodo])
        }
    }
    //deleting Todo
    const deleteTodo = (id) => {
        const deleteTodoItem = todoData.filter(todo => todo.id !== id);
        setTododata(deleteTodoItem);
    }
    //Editing Todo
    const editTodo = (id, description) => {
        if (description) {
            const editTodos = todoData.map(todo => {
                if (todo.id === id) {
                    todo.description = description;
                } return todo
            })
            setTododata(editTodos)
        }
    }
    console.log(todoData)

    return (
        <div>
            <AddTodo addTodo={addTodo} />
            {todoData.length ?
                <TodoList todoarray={todoData} deleteTodo={deleteTodo} editTodo={editTodo} />
                : <h2>No Todos in List</h2>
            }
        </div>
    )
}

export default GetTodos;