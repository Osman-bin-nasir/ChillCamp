import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Configure axios to send cookies
    axios.defaults.withCredentials = true;

    const checkAuth = async () => {
        try {
            const response = await axios.get('/api/auth/me');
            setCurrentUser(response.data.user);
        } catch (error) {
            setCurrentUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const login = async (credentials) => {
        const response = await axios.post('/api/auth/login', credentials);
        setCurrentUser(response.data.user);
        return response.data;
    };

    const register = async (userData) => {
        const response = await axios.post('/api/auth/register', userData);
        setCurrentUser(response.data.user);
        return response.data;
    };

    const logout = async () => {
        await axios.post('/api/auth/logout');
        setCurrentUser(null);
    };

    const value = {
        currentUser,
        login,
        register,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};