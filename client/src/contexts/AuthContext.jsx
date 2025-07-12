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
            console.log('Checking authentication...');
            const response = await axios.get('/api/auth/me');
            console.log('Auth check response:', response.data);
            setCurrentUser(response.data.user);
        } catch (error) {
            console.log('Auth check failed:', error.response?.status, error.response?.data);
            setCurrentUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const login = async (credentials) => {
        try {
            console.log('Attempting login with:', credentials.email);
            const response = await axios.post('/api/auth/login', credentials);
            console.log('Login response:', response.data);
            setCurrentUser(response.data.user);
            return response.data;
        } catch (error) {
            console.error('Login error:', error.response?.data);
            throw error;
        }
    };

    const register = async (userData) => {
        try {
            const response = await axios.post('/api/auth/register', userData);
            setCurrentUser(response.data.user);
            return response.data;
        } catch (error) {
            console.error('Register error:', error.response?.data);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await axios.post('/api/auth/logout');
            setCurrentUser(null);
        } catch (error) {
            console.error('Logout error:', error);
            // Even if logout fails on server, clear local state
            setCurrentUser(null);
        }
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
            {children}
        </AuthContext.Provider>
    );
};