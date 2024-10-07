import { z } from "zod";

export const productFormSchema = z.object({
  nameProduct: z.string().min(1, "El nombre es requerido"),
  code: z.string().min(1, "El código es requerido"),
  categoryId:z.number().int(),
  description: z.string().min(1, "La descripción es requerida"),
  price: z.number().positive("El precio debe ser un número positivo"),
  units: z.number().positive("Las unidades deben ser un número positivo"),
  image: z.instanceof(File).optional(),
  isActive: z.boolean().optional(),
});
