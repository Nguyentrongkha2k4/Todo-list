import {TodoItem} from "./TodoItem"
import { useTodos } from "../providers/TodoProvider";
import { mockTodos } from "../mocks/mocksTodo";

export const TodoList = () => {
    // const { todos } = useTodos();
    const todos = mockTodos;

    return (

        <ul>
            To do : Completed
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </ul>
    );
}
