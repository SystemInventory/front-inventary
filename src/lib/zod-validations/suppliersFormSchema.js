import { z } from "zod";

export const suppliersFormSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  dni: z.preprocess(
    (val) => String(val),
    z
      .string()
      .min(1, "El dni es requerido")
      .length(8, "El dni debe tener exactamente 8 caracteres")
      .regex(/^\d{8}$/, "El dni debe ser un número de 8 dígitos")
  ),
  email: z.string().min(1, "El email es requerido"),
  phone: z.preprocess(
    (val) => String(val),
    z
      .string()
      .min(1, "El telefono es requerido")
      .length(9, "El teléfono debe tener exactamente 9 dígitos")
      .regex(/^9\d{8}$/, "El teléfono debe empezar por 9 y tener 9 dígitos")
  ),
  isActive: z.boolean().optional(),
});
