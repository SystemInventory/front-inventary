import { z } from "zod";

export const suppliersFormSchema = z.object({
  name:z.string().min(1,"El nombre es requerido"),
  dni:z.string().min(1,"El DNI es requerido"),
  email:z.string().min(1,"El email es requerido"),
  phone:z.string().min(1,"El telefono es requerido"),
});
