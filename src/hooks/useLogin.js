import { useAuthStore } from "@/stores/useAuthStore";
import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { useForm } from "react-hook-form";

export const useLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const checking = useAuthStore((state) => state.checking);
  const errorMessage = useAuthStore((state) => state.errorMessage);

  const { Login } = useAuth();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await Login(data);
    } catch (error) {
      // Manejo de errores
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (errorMessage) {
      console.error("Error al hacer login", errorMessage);
    }
  }, [errorMessage]);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit), // Asegúrate de que handleSubmit esté llamando a onSubmit
    errors,
    showPassword,
    loading,
    checking,
    handleClickShowPassword,
    handleMouseDownPassword,
  };
};