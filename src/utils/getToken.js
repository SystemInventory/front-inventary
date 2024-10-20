export const getTokenFromSessionStorage = () => {
    // Primero, intenta obtener el token del sessionStorage
    const authStore = sessionStorage.getItem("auth-store");
    console.log('Valor de authStore:', authStore);
    if (authStore) {
        try {
            const parsedStore = JSON.parse(authStore);
            return parsedStore?.state.token || null;
        } catch (error) {
            console.error("Error al parsear el auth-store:", error);
        }
    }

    // Si no se encuentra en sessionStorage, intenta obtener el token del localStorage
    const authToken = localStorage.getItem("authToken");
    console.log('Valor de authToken:', authToken);
    if (authToken) {
        return authToken;
    }

    // Si no se encuentra en ninguno de los dos, retorna null
    return null;
};