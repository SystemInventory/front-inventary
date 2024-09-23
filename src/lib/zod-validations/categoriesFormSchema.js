import { z } from "zod";

export const categoriesFormSchema = z.object({
  name:z.string().min(1,"El nombre es requerido"),
  description:z.string().min(1,"La descripcion es requerida")
})
