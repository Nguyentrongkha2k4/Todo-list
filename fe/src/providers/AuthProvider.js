import { createContext, useContext, useState, useEffect } from "react";
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);

    // Load state when refreshing 
    useEffect(()=>{
        const token = Cookies.get("token");
        setIsLogin(!!token);
    },[]);

    const login = (token, remember = false) => {
        let expires = 1;

        if(remember){
            expires = 7;
        }

        Cookies.set("token", token, {
            expires: expires,
            secure: false,
            sameSite: "lax"
        });
        setIsLogin(true);
    }

    const logout = () => {
        Cookies.remove("token");
        setIsLogin(false);
    }

    return (
        <AuthContext.Provider value={{ isLogin, login, logout }}>
            { children }
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);