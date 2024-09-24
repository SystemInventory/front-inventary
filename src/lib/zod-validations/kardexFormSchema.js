import { z } from "zod";

export const kardexFormSchema = z.object({
  id: z.number().int(),
  product: z.string(),
  tipoTransacction: z.enum(["entrada", "salida"]),
  count: z.number().int().positive(),
  description: z.string(),
  userId: z.number().int(),
  expirationDate: z.string().refine(
    (date) => {
      return !isNaN(Date.parse(date));
    },
    {
      message: "Invalid date format",
    }
  ),
  supplierId: z.number().int(),
});
