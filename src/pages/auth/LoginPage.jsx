import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Button, Form, FormItem, Input } from "@/components/ui";
import { AuthLayout } from "@/layout/AuthLayout";

const MySwal = withReactContent(Swal);

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    if (data.password !== "correct_password") {
      MySwal.fire({
        title: "Error",
        text: "Contraseña incorrecta",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      // Lógica para el inicio de sesión exitoso
    }
  };

  return (
    <AuthLayout>
      <div className="bg-gray-400/55 flex flex-col gap-5 p-8 border rounded-md w-full max-w-md">
        <h1 className="text-center font-bold text-2xl">
          Sistema de Inventario Farmaceutico
        </h1>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-lg shadow-md "
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
                onClick={() => setShowPassword(!showPassword)}
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
          <Button type="submit" className=" w-full  text-white py-2 rounded-lg">
            Iniciar sesión
          </Button>
        </Form>
      </div>
    </AuthLayout>
  );
};
