import { useFormContext } from "react-hook-form";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui";

 export const PersonalForm = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="grid grid-cols-2 gap-10 py-4">
      <div className="flex flex-col gap-4">
        <FormItem>
          <FormLabel htmlFor="name">Nombre</FormLabel>
          <FormControl>
            <input id="name" {...register("name")} className="input" />
          </FormControl>
          {errors.name && <FormMessage>{errors.name.message}</FormMessage>}
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="dni">DNI</FormLabel>
          <FormControl>
            <input id="dni" {...register("dni")} className="input" />
          </FormControl>
          {errors.dni && <FormMessage>{errors.dni.message}</FormMessage>}
        </FormItem>
      </div>
      <div className="flex flex-col gap-4">
        <FormItem>
          <FormLabel htmlFor="email">Correo</FormLabel>
          <FormControl>
            <input id="email" {...register("email")} className="input" />
          </FormControl>
          {errors.email && <FormMessage>{errors.email.message}</FormMessage>}
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="phone">Telefono</FormLabel>
          <FormControl>
            <input id="phone" {...register("phone")} className="input" />
          </FormControl>
          {errors.phone && <FormMessage>{errors.phone.message}</FormMessage>}
        </FormItem>
      </div>
    </div>
  );
};

