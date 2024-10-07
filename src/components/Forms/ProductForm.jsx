import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useCategory } from "@/hooks/useCategory";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Input,
} from "@/components/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const ProductForm = ({ editData }) => {
  const BASE_URL = "http://localhost:8080";
  const { categories } = useCategory();
  const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext();
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (editData) {
      setImagePreview(editData.photos ? `${BASE_URL}${editData.photos}` : null);
    }
  }, [editData]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setValue("image", file);
    } else {
      setImagePreview(null);
    }
  };


  // const selectedCategory = watch("categoryId");

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
            <FormLabel htmlFor="code">Codigo</FormLabel>
            <FormControl>
              <Input id="code" {...register("code")} className="input" />
            </FormControl>
            {errors.code && (
              <FormMessage>{errors.code.message}</FormMessage>
            )}
          </FormItem>

          <FormItem>
            <FormLabel htmlFor="isActive">Estado</FormLabel>
            <FormControl>
              <Select
                onValueChange={(value) =>
                  setValue("isActive", value === "true")
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona el estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Activo</SelectItem>
                  <SelectItem value="false">Inactivo</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            {errors.isActive && (
              <FormMessage>{errors.isActive.message}</FormMessage>
            )}
          </FormItem>
        </div>
        <div className="flex flex-col gap-6">
          <FormItem>
            <FormLabel htmlFor="categoryId">Categoría</FormLabel>
            <FormControl>
              <Select
                onValueChange={(value) => setValue("categoryId", parseInt(value))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione una categoría"/>                
                </SelectTrigger>
                <SelectContent>
                  {categories
                    .filter((category) => category.isActive)
                    .map((category) => (
                      <SelectItem key={category.id} value={category.id.toString()}>
                        {category.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </FormControl>
            {errors.categoryId && (
              <FormMessage>{errors.categoryId.message}</FormMessage>
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
            <FormLabel htmlFor="image">Imagen</FormLabel>
            <FormControl>
              <Input
                id="image"
                name="image"
                type="file"
                onChange={handleImageChange}
                className="input"
              />
            </FormControl>
            {errors.image && (
              <FormMessage>{errors.image.message}</FormMessage>
            )}
          </FormItem>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {imagePreview ? (
          <img
            src={imagePreview}
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