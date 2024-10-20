import { useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Button, FormItem, Input } from "@/components/ui";
import { AuthLayout } from "@/layout/AuthLayout";
import { useLogin } from "@/hooks/useLogin"; // Importa el hook useLogin
import { getTokenFromSessionStorage } from "@/utils/getToken"; // Importa la función getTokenFromSessionStorage
import { useAuthStore } from "@/stores/useAuthStore";
import axiosInstance from "@/api/axiosConfig";

const MySwal = withReactContent(Swal);

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    errors,
    showPassword,
    handleClickShowPassword,
  } = useLogin();
  const setToken = useAuthStore((state) => state.setToken); // Obtén la acción setToken

  useEffect(() => {
    const token = getTokenFromSessionStorage();
    console.log("Token:", token); // Muestra el token en la consola
    if (token) {
      setToken(token); // Establece el token en authStore
    }
  }, [setToken]);

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post('/auth/login', data);
      const { token } = response.data;
      setToken(token);
      sessionStorage.setItem('authToken', token);
      window.location.href = '/'; // Redirige al usuario después de iniciar sesión
    } catch (error) {
      MySwal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al iniciar sesión',
      });
    }
  };

  return (
    <AuthLayout>
      <div className="bg-gray-400/55 flex flex-col gap-5 p-8 border rounded-md w-full max-w-md">
        <h1 className="text-center font-bold text-2xl">
          Sistema de Inventario Farmaceutico
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)} // Asegúrate de que handleSubmit se esté pasando correctamente
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <FormItem>
            <label
              htmlFor="username"
              className="block text-lg text-black font-semibold mb-2"
            >
              Nombre de usuario
            </label>
            <Input
              id="username"
              {...register("username", { required: true })}
              className="mt-1 bg-white block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.username && (
              <span className="text-red-500 text-sm">
                Este campo es obligatorio
              </span>
            )}
          </FormItem>
          <FormItem>
            <label
              htmlFor="password"
              className="block text-lg text-black font-semibold mb-2"
            >
              Contraseña
            </label>
            <div className="relative mt-1">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password", { required: true })}
                className="block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <span
                onClick={handleClickShowPassword} // Usa handleClickShowPassword aquí
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </span>
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm">
                Este campo es obligatorio
              </span>
            )}
          </FormItem>
          <Button type="submit" className="w-full text-white py-2 rounded-lg">
            Iniciar sesión
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
};