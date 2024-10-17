import { useFormContext } from "react-hook-form";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Input,
} from "@/components/ui";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

 export const PersonalForm = () => {
  const { register, formState: { errors },setValue } = useFormContext();

  return (
    <div className="grid grid-cols-2 gap-10 py-4">
      <div className="flex flex-col gap-4">
        <FormItem>
          <FormLabel htmlFor="name">Nombre</FormLabel>
          <FormControl>
            <Input id="username" {...register("username")} className="input" />
          </FormControl>
          {errors.username && <FormMessage>{errors.username.message}</FormMessage>}
        </FormItem>
        
        <FormItem>
          <FormLabel htmlFor="dni">DNI</FormLabel>
          <br />
          <FormControl>
            <Input id="dni"  {...register("dni")} className="input" />
          </FormControl>
          {errors.dni && <FormMessage>{errors.dni.message}</FormMessage>}
        </FormItem>
      </div>
      <div className="flex flex-col gap-4">
        <FormItem>
          <FormLabel htmlFor="email">Correo</FormLabel>
          <FormControl>
            <Input id="email" type="email" {...register("email")} className="input" />
          </FormControl>
          {errors.email && <FormMessage>{errors.email.message}</FormMessage>}
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="phone">Telefono</FormLabel>
          <FormControl>
            <Input id="phone"{...register("phone")} className="input" />
          </FormControl>
          {errors.phone && <FormMessage>{errors.phone.message}</FormMessage>}
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="isActive">Estado</FormLabel>
          <FormControl>
            <Select onValueChange={(value) => setValue("isActive", value === "true")}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona el estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="true">Activo</SelectItem>
                <SelectItem value="false">Inactivo</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
          {errors.isActive && <FormMessage>{errors.isActive.message}</FormMessage>}
        </FormItem>
      </div>
    </div>
  );
};

