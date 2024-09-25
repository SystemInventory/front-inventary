import { useFormContext } from "react-hook-form";
import { FormControl, FormItem, FormLabel, FormMessage, Input } from "../ui";
import { personal } from "@/data/personal";
import { suppliers } from "@/data/suppliers";

export const KardexForm = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="grid grid-cols-2 gap-10 py-4">
      <div className="flex flex-col gap-4">
        <FormItem>
          <FormLabel htmlFor="product">Producto</FormLabel>
          <FormControl>
            <Input id="product" {...register("product", { required: "Producto es requerido" })} className="input" />
          </FormControl>
          {errors.product && <FormMessage>{errors.product.message}</FormMessage>}
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="count">Cantidad</FormLabel>
          <FormControl>
            <Input id="count" {...register("count", { valueAsNumber: true, required: "Cantidad es requerida" })} className="input" />
          </FormControl>
          {errors.count && <FormMessage>{errors.count.message}</FormMessage>}
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="description">Descripción</FormLabel>
          <FormControl>
            <Input id="description" {...register("description", { required: "Descripción es requerida" })} className="input" />
          </FormControl>
          {errors.description && <FormMessage>{errors.description.message}</FormMessage>}
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="expirationDate">Fecha de Vencimiento</FormLabel>
          <FormControl>
            <Input id="expirationDate" type="date" {...register("expirationDate", { required: "Fecha de vencimiento es requerida" })} className="input" />
          </FormControl>
          {errors.expirationDate && <FormMessage>{errors.expirationDate.message}</FormMessage>}
        </FormItem>
      </div>
      <div className="flex flex-col gap-4">
        <FormItem>
          <FormLabel htmlFor="tipoTransacction">Tipo de Transacción</FormLabel>
          <FormControl>
            <Input id="tipoTransacction" {...register("tipoTransacction", { required: "Tipo de transacción es requerido" })} className="input" />
          </FormControl>
          {errors.tipoTransacction && <FormMessage>{errors.tipoTransacction.message}</FormMessage>}
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="time">Fecha</FormLabel>
          <FormControl>
            <Input id="time" type="date" {...register("time", { required: "Fecha es requerida" })} className="input" />
          </FormControl>
          {errors.time && <FormMessage>{errors.time.message}</FormMessage>}
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="userId">Usuario</FormLabel>
          <FormControl>
            <select id="userId" {...register("userId", { valueAsNumber: true, required: "Usuario es requerido" })} className="input">
              <option value="">Seleccione un usuario</option>
              {personal.map((user) => (
                <option key={user.id} value={user.id}>{user.name}</option>
              ))}
            </select>
          </FormControl>
          {errors.userId && <FormMessage>{errors.userId.message}</FormMessage>}
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="supplierId">Proveedor</FormLabel>
          <FormControl>
            <select id="supplierId" {...register("supplierId", { valueAsNumber: true, required: "Proveedor es requerido" })} className="input">
              <option value="">Seleccione un proveedor</option>
              {suppliers.map((supplier) => (
                <option key={supplier.id} value={supplier.id}>{supplier.name}</option>
              ))}
            </select>
          </FormControl>
          {errors.supplierId && <FormMessage>{errors.supplierId.message}</FormMessage>}
        </FormItem>
      </div>
    </div>
  );
};