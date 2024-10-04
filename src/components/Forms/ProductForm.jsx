import { useState } from "react";
import { useFormContext } from "react-hook-form";

import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Input,
} from "@/components/ui";
import { categories } from "@/data/categories";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export const ProductForm = () => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      setValue("imageUrl", file);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-5 py-2">
      <div className="col-span-2 grid grid-cols-2 gap-20">
        <div className="flex flex-col gap-6">
          <FormItem>
            <FormLabel htmlFor="nameProduct">Nombre</FormLabel>
            <FormControl>
              <Input
                id="nameProduct"
                {...register("nameProduct")}
                className="input"
              />
            </FormControl>
            {errors.nameProduct && (
              <FormMessage>{errors.nameProduct.message}</FormMessage>
            )}
          </FormItem>

          <FormItem>
            <FormLabel htmlFor="units">Unidades</FormLabel>
            <FormControl>
              <Input
                id="units"
                type="number"
                {...register("units", { valueAsNumber: true })}
                className="input"
              />
            </FormControl>
            {errors.units && <FormMessage>{errors.units.message}</FormMessage>}
          </FormItem>

          <FormItem>
            <FormLabel htmlFor="codigo">Codigo</FormLabel>
            <FormControl>
              <Input id="codigo" {...register("codigo")} className="input" />
            </FormControl>
            {errors.codigo && (
              <FormMessage>{errors.codigo.message}</FormMessage>
            )}
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
        <div className="flex flex-col gap-6">
        <FormItem>
            <FormLabel htmlFor="category">Categoría</FormLabel>
            <FormControl>
              <Select
                onValueChange={(value) =>
                  setValue("category", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione una categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categories
                    .filter((category) => category.isActive)
                    .map((category) => (
                      <SelectItem
                        key={category.id}
                        value={category.name}
                      >
                        {category.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </FormControl>
            {errors.category && (
              <FormMessage>{errors.category.message}</FormMessage>
            )}
          </FormItem>
          <FormItem>
            <FormLabel htmlFor="price">Price</FormLabel>
            <FormControl>
              <Input
                id="price"
                type="number"
                step="0.01"
                {...register("price", { valueAsNumber: true })}
                className="input"
              />
            </FormControl>
            {errors.price && <FormMessage>{errors.price.message}</FormMessage>}
          </FormItem>

          <FormItem>
            <FormLabel htmlFor="description">Description</FormLabel>
            <FormControl>
              <Input
                id="description"
                {...register("description")}
                className="input"
              />
            </FormControl>
            {errors.description && (
              <FormMessage>{errors.description.message}</FormMessage>
            )}
          </FormItem>

          <FormItem>
            <FormLabel htmlFor="imageUrl">Imagen</FormLabel>
            <FormControl>
              <Input
                id="imageUrl"
                name="imageUrl"
                type="file"
                onChange={handleImageChange}
                className="input"
              />
            </FormControl>
            {errors.imageUrl && (
              <FormMessage>{errors.imageUrl.message}</FormMessage>
            )}
          </FormItem>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Selected"
            className="mt-2 w-full h-full object-cover"
          />
        ) : (
          <div className="mt-2 w-full h-full bg-gray-200 flex items-center justify-center">
            Sin imagen
          </div>
        )}
      </div>
    </div>
  );
};
