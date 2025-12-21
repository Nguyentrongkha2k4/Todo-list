import { API_BASE_URL } from "../configs/env";

export async function http(url, options = {}) {
    const res = await fetch(`${API_BASE_URL}/${url}`, {
        headers: { "Content-Type": "application/json"},
        ...options,
    });

    if (!res.ok) throw new Error("API Error");
    return res.json();
}