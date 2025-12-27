import {http} from "../lib/http";
import {API_BASE_URL} from "../configs/env"

const url = '/auth'
const registerAPI = async (data) => {
    return http(`${API_BASE_URL}/${url}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

const loginAPI = async (data) => {
    return http(`${API_BASE_URL}/${url}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

export {
    registerAPI,
    loginAPI
}