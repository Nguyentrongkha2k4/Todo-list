import {TodoItem} from "./TodoItem"
import { useTodos } from "../../providers/TodoProvider";
import { mockTodos } from "../../mocks/mocksTodo";
import { useNavigate } from "react-router-dom";

export const TodoList = () => {
    // const { todos } = useTodos();
    const todos = mockTodos;
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => {navigate("/login")}}>Login</button>

            <ul>
                To do : Completed
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo}/>
                ))}
            </ul>
        </div>
    );
}
