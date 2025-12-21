import { createContext, useContext, useEffect, useState } from "react";
import {getTodos, addTodo} from "../api/todo"

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos().then(setTodos);
    }, []);

    // Add todo 
    const addTodo = ( title ) => {
        addTodo(title).then(todo => {
            setTodos(prev => [...prev, todo]);
        });
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo }}>
            {children}
        </TodoContext.Provider>
    );
}

export const useTodos = () => {
    return useContext(TodoContext);
}