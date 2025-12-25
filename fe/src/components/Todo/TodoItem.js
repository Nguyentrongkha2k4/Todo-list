export const TodoItem = ({ todo }) => {
    return <li>{todo.title}: {todo.completed?'True': 'False' }</li>;
}