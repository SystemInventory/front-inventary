import { z } from "zod";

export const kardexFormSchema = z.object({
  productName: z.string().min(1, "El nombre del producto es requerido"),
  tipoTransacction: z.enum(["ENTRADA", "SALIDA","CADUCIDAD"], "El tipo de transacción es requerido"),
  count: z.number().min(1, "La cantidad es requerida"),
  description: z.string().min(1, "La descripción es requerida"),
  user: z.object({
    id: z.number(),
    name: z.string(),
    dni: z.string(),
    email: z.string(),
    phone: z.string(),
    isActive: z.boolean(),
  }),
  supplier: z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
    isActive: z.boolean(),
    phone: z.string(),
    dni: z.string(),
  }),
  expirationDate: z.string().min(1, "La fecha de expiración es requerida"),
  dateOperation: z.string().min(1, "La fecha de operación es requerida"),
});