// src/service/auth.service.js
import axiosInstance from '../api/axiosConfig';

export const login = async (username, password) => {
    try {
        const response = await axiosInstance.post('/auth/login', { username, password });
        const token = response.data.token; // Asegúrate de que el backend devuelva un token
        localStorage.setItem('authToken', token);
        return response.data;
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }
};