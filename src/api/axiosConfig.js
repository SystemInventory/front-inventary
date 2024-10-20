import axios from 'axios';
import { getTokenFromSessionStorage } from '@/utils/getToken';

const axiosInstance = axios.create({
  baseURL: '/api', // La baseURL ahora es '/api' debido al proxy
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getTokenFromSessionStorage();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log("Token añadido a la cabecera:", token);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Eliminar el token del sessionStorage
      sessionStorage.removeItem('authToken');
      // Opcional: Redirigir al usuario a la página de inicio de sesión
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;