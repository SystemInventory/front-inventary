// src/components/Forms/CategoryForm.jsx
import { useFormContext } from "react-hook-form";
import { FormControl, FormItem, FormLabel, FormMessage, Input } from "../ui";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export const CategoryForm = () => {
  const {
    register,
    formState: { errors },setValue
  } = useFormContext();

  return (
    <div className="grid grid-cols-2 gap-10 py-4">
      <div className="flex flex-col gap-4">
        <FormItem>
          <FormLabel htmlFor="name">Nombre</FormLabel>
          <FormControl>
            <Input id="name" {...register("name")} className="input" />
          </FormControl>
          {errors.name && <FormMessage>{errors.name.message}</FormMessage>}
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="description">Descripcion</FormLabel>
          <FormControl>
            <Input id="description" {...register("description")} className="input" />
          </FormControl>
          {errors.description && <FormMessage>{errors.description.message}</FormMessage>}
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