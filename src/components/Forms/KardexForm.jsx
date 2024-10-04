import { useFormContext } from "react-hook-form";
import { FormControl, FormItem, FormLabel, FormMessage, Input } from "../ui";
import { personal } from "@/data/personal";
import { suppliers } from "@/data/suppliers";
import { product } from "@/data/product";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const KardexForm = () => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  return (
    <div className="grid grid-cols-2 gap-10 py-4">
      <div className="flex flex-col gap-4">
        <FormItem>
          <FormLabel htmlFor="product">Producto</FormLabel>
          <FormControl>
            <Select onValueChange={(value) => setValue("product", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Seleccione un producto" />
              </SelectTrigger>
              <SelectContent>
                {product
                  .filter((item) => item.isActive)
                  .map((item) => (
                    <SelectItem key={item.id} value={item.nameProduct}>
                      {item.nameProduct}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </FormControl>
          {errors.product && (
            <FormMessage>{errors.product.message}</FormMessage>
          )}
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="count">Cantidad</FormLabel>
          <FormControl>
            <Input
              id="count"
              {...register("count", {
                valueAsNumber: true,
                required: "Cantidad es requerida",
              })}
              className="input"
            />
          </FormControl>
          {errors.count && <FormMessage>{errors.count.message}</FormMessage>}
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="description">Descripción</FormLabel>
          <FormControl>
            <Input
              id="description"
              {...register("description", {
                required: "Descripción es requerida",
              })}
              className="input"
            />
          </FormControl>
          {errors.description && (
            <FormMessage>{errors.description.message}</FormMessage>
          )}
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="expirationDate">Fecha de Vencimiento</FormLabel>
          <FormControl>
            <Input
              id="expirationDate"
              type="date"
              {...register("expirationDate", {
                required: "Fecha de vencimiento es requerida",
              })}
              className="input"
            />
          </FormControl>
          {errors.expirationDate && (
            <FormMessage>{errors.expirationDate.message}</FormMessage>
          )}
        </FormItem>
      </div>
      <div className="flex flex-col gap-4">
        <FormItem>
          <FormLabel htmlFor="tipoTransacction">Tipo de Transacción</FormLabel>
          <FormControl>
            <Input
              id="tipoTransacction"
              {...register("tipoTransacction", {
                required: "Tipo de transacción es requerido",
              })}
              className="input"
            />
          </FormControl>
          {errors.tipoTransacction && (
            <FormMessage>{errors.tipoTransacction.message}</FormMessage>
          )}
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="time">Fecha</FormLabel>
          <FormControl>
            <Input
              id="time"
              type="date"
              {...register("time", { required: "Fecha es requerida" })}
              className="input"
            />
          </FormControl>
          {errors.time && <FormMessage>{errors.time.message}</FormMessage>}
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="userId">Usuario</FormLabel>
          <FormControl>
            <Select
              onValueChange={(value) => setValue("userId", parseInt(value, 10))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccione un usuario" />
              </SelectTrigger>
              <SelectContent>
                {personal
                  .filter((user) => user.isActive)
                  .map((user) => (
                    <SelectItem key={user.id} value={user.id.toString()}>
                      {user.name}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </FormControl>
          {errors.userId && <FormMessage>{errors.userId.message}</FormMessage>}
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="supplierId">Proveedor</FormLabel>
          <FormControl>
            <Select
              onValueChange={(value) =>
                setValue("supplierId", parseInt(value, 10))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccione un proveedor" />
              </SelectTrigger>
              <SelectContent>
                {suppliers
                  .filter((supplier) => supplier.isActive)
                  .map((supplier) => (
                    <SelectItem
                      key={supplier.id}
                      value={supplier.id.toString()}
                    >
                      {supplier.name}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </FormControl>
          {errors.supplierId && (
            <FormMessage>{errors.supplierId.message}</FormMessage>
          )}
        </FormItem>
      </div>
    </div>
  );
};
