import { z } from "zod";

 export const schema = z.object({
  name: z.string().min(1, "Nombre es requerido"),
  dni: z.string().min(1, "DNI es requerido"),
  email: z.string().min(1, "Correo es requerido"),
  phone: z.string().min(1, "Telefono es requerido"),
});
