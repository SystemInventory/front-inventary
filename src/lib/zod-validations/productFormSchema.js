import { z } from "zod";

export const productFormSchema = z.object({
    nameProduct: z.string().min(1, "El nombre es requerido"),
    codigo: z.string().min(1, "El código es requerido"),
    category: z.string().min(1, "La categoría es requerida"),
    description: z.string().min(1, "La descripción es requerida"),
    price: z.number().positive("El precio debe ser un número positivo"), 
    units: z.number().positive("Las unidades deben ser un número positivo"), 
    imageUrl: z.any().optional(), 
  });