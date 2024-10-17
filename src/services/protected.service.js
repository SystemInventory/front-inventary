import axiosInstance from '../api/axiosConfig';

export const getProtectedResource = async () => {
    try {
        const response = await axiosInstance.get('/protected/resource');
        return response.data;
    } catch (error) {
        console.error('Error al obtener el recurso protegido:', error);
        throw error;
    }
};