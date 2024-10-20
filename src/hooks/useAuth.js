import axios from 'axios';
import { useAuthStore } from '@/stores/useAuthStore';

export const useAuth = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const setErrorMessage = useAuthStore((state) => state.setErrorMessage);

  const Login = async (data) => {
    try {
      const response = await axios.post('http://localhost:8080/auth/login', data);
      const { token } = response.data;
      setToken(token);
      sessionStorage.setItem('authToken', token); // Almacena el token en sessionStorage
    } catch (error) {
      setErrorMessage('Error al iniciar sesión');
      console.error('Error al iniciar sesión:', error);
    }
  };

  return { Login };
};