import { useState } from "react"
import { Form, useNavigate } from "react-router-dom"
import { loginAPI } from "../../api/auth";
import { useAuth } from "../../providers/AuthProvider"

const LoginForm = (e) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const data = await loginAPI({
            username,
            password,
            });
            login(data.token, remember);
            navigate("/");

            console.log("Login success", data);
        } catch (err) {
            setError(err.message || "Login failed");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />

            <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <label>
                <input 
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.value)}
                />Remember Me
            </label>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;