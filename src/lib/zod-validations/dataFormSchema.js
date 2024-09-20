import { z } from "zod";

 export const schema = z.object({
  invoice: z.string().min(1, "Nombre es requerido"),
  paymentStatus: z.string().min(1, "DNI es requerido"),
  totalAmount: z.string().min(1, "Correo es requerido"),
  paymentMethod: z.string().min(1, "Telefono es requerido"),
});
