// src/service/auth.service.js
// import axiosInstance from "@/api/axiosConfig";

// export const login = async (username, password) => {
//     try {
//         const response = await axiosInstance.post('/auth/login', { username, password });
//         const token = response.data.token; // Asegúrate de que el backend devuelva un token
//         sessionStorage.setItem('authToken', JSON.stringify({ state: { token } }));
//         console.log('Token almacenado en sessionStorage:', sessionStorage.getItem('authToken'));
//         return response.data;
//     } catch (error) {
//         console.error('Error al iniciar sesión:', error);
//         throw error;
//     }
// };
export const loginService = async (user) => {
    try {
      const resp = await fetch(`http://localhost:8080/auth/login`, {
        method: "POST",
        body: JSON.stringify({
          ...user,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!resp.ok) {
        if (resp.status === 401 || resp.status === 404) {
          throw new Error("Usuario o contraseña incorrectos.");
        }
        if (resp.status === 400) {
          throw new Error("La solicitud es inválida.");
        }
  
        throw new Error("Ocurrió un error desconocido.");
      }
  
      return await resp.json();
    } catch (error) {
      throw (error).message;
      //Error de Backend en base a conexion
    }
  };