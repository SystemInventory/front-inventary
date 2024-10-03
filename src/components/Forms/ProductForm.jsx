import { useFormContext } from "react-hook-form";
import { useState } from "react";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Input,
} from "@/components/ui";

export const ProductForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <div className="   grid grid-cols-3 gap-5 py-2">
      <div className="col-span-2 grid grid-cols-2 gap-20">
        <div className="flex flex-col gap-6">
          <FormItem>
            <FormLabel htmlFor="nameProduct">Nombre del Producto</FormLabel>
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
            <FormLabel htmlFor="quantity">Cantidad</FormLabel>
            <FormControl>
              <Input
                id="quantity"
                {...register("quantity")}
                className="input"
              />
            </FormControl>
            {errors.quantity && (
              <FormMessage>{errors.quantity.message}</FormMessage>
            )}
          </FormItem>
          <FormItem>
            <FormLabel htmlFor="typeProduct">Tipo de Producto</FormLabel>
            <FormControl>
              <Input
                id="typeProduct"
                {...register("typeProduct")}
                className="input"
              />
            </FormControl>
            {errors.typeProduct && (
              <FormMessage>{errors.typeProduct.message}</FormMessage>
            )}
          </FormItem>
          <FormItem>
            <FormLabel htmlFor="codeProduct">Código del Producto</FormLabel>
            <FormControl>
              <Input
                id="codeProduct"
                {...register("codeProduct")}
                className="input"
              />
            </FormControl>
            {errors.codeProduct && (
              <FormMessage>{errors.codeProduct.message}</FormMessage>
            )}
          </FormItem>
        </div>
        <div className="flex flex-col gap-6">
          <FormItem>
            <FormLabel htmlFor="category">Categoría</FormLabel>
            <FormControl>
              <Input
                id="category"
                {...register("category")}
                className="input"
              />
            </FormControl>
            {errors.category && (
              <FormMessage>{errors.category.message}</FormMessage>
            )}
          </FormItem>
          <FormItem>
            <FormLabel htmlFor="price">Precio</FormLabel>
            <FormControl>
              <Input id="price" {...register("price")} className="input" />
            </FormControl>
            {errors.price && <FormMessage>{errors.price.message}</FormMessage>}
          </FormItem>
          <FormItem>
            <FormLabel htmlFor="units">Unidades</FormLabel>
            <FormControl>
              <Input id="units" {...register("units")} className="input" />
            </FormControl>
            {errors.units && <FormMessage>{errors.units.message}</FormMessage>}
          </FormItem>
          <FormItem>
            <FormLabel htmlFor="image">Imagen del Producto</FormLabel>
            <FormControl>
              <Input
                id="image"
                type="file"
                {...register("image")}
                className="input"
                onChange={handleImageChange}
              />
            </FormControl>
            {errors.image && <FormMessage>{errors.image.message}</FormMessage>}
          </FormItem>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="mt-4">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-64 object-cover"
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
              No imagen
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
