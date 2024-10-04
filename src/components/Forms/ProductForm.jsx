import { useFormContext } from "react-hook-form";

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
    setValue,
  } = useFormContext();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
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
        </div>
        <div className="flex flex-col gap-6">
          <FormItem>
            <FormLabel htmlFor="category">Category</FormLabel>
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
            <FormLabel htmlFor="price">Price</FormLabel>
            <FormControl>
              <Input
                id="price"
                type="number"
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
    </div>
  );
};
