import { useFormContext } from "react-hook-form";
import { FormControl, FormItem, FormLabel, FormMessage, Input } from "../ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useSupplier } from "@/hooks/useSupplier";
import { usePersonnel } from "@/hooks/usePersonnel";
import { useProduct } from "@/hooks/useProduct";

export const KardexForm = () => {
  const { product } = useProduct();
  const { suppliers } = useSupplier();
  const { personal } = usePersonnel();
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  return (
    <div className="grid grid-cols-2 gap-10 py-4">
      <div className="flex flex-col gap-4">
        <FormItem>
          <FormLabel htmlFor="productName">Producto</FormLabel>
          <FormControl>
            <Select
              onValueChange={(value) => {
                const selectedProduct = product.find((item) => item.id === parseInt(value, 10));
                setValue("productName", selectedProduct.nameProduct);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccione un producto" />
              </SelectTrigger>
              <SelectContent>
                {product
                  .filter((item) => item.isActive)
                  .map((item) => (
                    <SelectItem key={item.id} value={item.id.toString()}>
                      {item.nameProduct}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </FormControl>
          {errors.productName && (
            <FormMessage>{errors.productName.message}</FormMessage>
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
            <Select
              onValueChange={(value) => setValue("tipoTransacction", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccione un Tipo " />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ENTRADA">ENTRADA</SelectItem>
                <SelectItem value="SALIDA">SALIDA</SelectItem>
                <SelectItem value="CADUCIDAD">CADUCIDAD</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
          {errors.tipoTransacction && (
            <FormMessage>{errors.tipoTransacction.message}</FormMessage>
          )}
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="dateOperation">Fecha Operacion</FormLabel>
          <FormControl>
            <Input
              id="dateOperation"
              type="date"
              {...register("dateOperation", {
                required: "Fecha operacion es requerida",
              })}
              className="input"
            />
          </FormControl>
          {errors.dateOperation && (
            <FormMessage>{errors.dateOperation.message}</FormMessage> 
          )}
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="user">Usuario</FormLabel>
          <FormControl>
            <Select
              onValueChange={(value) => {
                const selectedUser = personal.find((user) => user.id === parseInt(value, 10));
                setValue("user", selectedUser); // Almacena el objeto completo
              }}
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
          {errors.user && (
            <FormMessage>{errors.user.message}</FormMessage>
          )}
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="supplier">Proveedor</FormLabel>
          <FormControl>
            <Select
              onValueChange={(value) => {
                const selectedSupplier = suppliers.find((supplier) => supplier.id === parseInt(value, 10));
                setValue("supplier", selectedSupplier); // Almacena el objeto completo
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccione un proveedor" />
              </SelectTrigger>
              <SelectContent>
                {suppliers
                  .filter((supplier) => supplier.isActive)
                  .map((supplier) => (
                    <SelectItem key={supplier.id} value={supplier.id.toString()}>
                      {supplier.name}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </FormControl>
          {errors.supplier && (
            <FormMessage>{errors.supplier.message}</FormMessage>
          )}
        </FormItem>
      </div>
    </div>
  );
};