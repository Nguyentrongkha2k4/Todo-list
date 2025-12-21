import { http } from "../lib/http"

const url = '/todos'
export function getTodos(){
    return http(`${url}`,{
        method: 'GET'
    });
}

export function addTodo(title){
    return http(`${url}`, {
        method: 'POST',
        body: JSON.stringify({ title }),
    });
}