import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [userId, setUserId] = useState(0);



    useEffect(() => {
        const storedUserId = localStorage.getItem("userId");
        if (storedUserId && storedUserId !== 0) {
            setUserId(Number(storedUserId));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ authenticated, setAuthenticated, userId, setUserId }}>
            {children}
        </AuthContext.Provider>
    );
};