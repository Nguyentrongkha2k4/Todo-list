import {http} from "../lib/http";
import {API_BASE_URL} from "../configs/env"

const url = '/auth'
export function register(data){
    return http(`${API_BASE_URL}/${url}/register`, {
        method: "POST",
        body: JSON.stringify({data}),
    });
}