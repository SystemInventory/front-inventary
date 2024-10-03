import { z } from "zod";

export const productFormSchema = z.object({
    id: z.number().int(),
    nameProduct: z.string().min(1, "Nombre es requerido"),
    quantity: z.string().min(1, "La cantidad es obligatoria"),
    typeProduct: z.string().min(1, "El tipo de producto es obligatorio"),
    codeProduct: z.string().min(1, "El código de producto es obligatorio"),
    category: z.string().min(1, "La categoría es obligatoria"),
    price: z.string().min(1,"El precio es obligatorio"),
    units: z.string().min(1, "Las unidades son obligatorias"),
    image: z.any().optional() 
});