import { suppliersFormSchema } from "@/lib/zod-validations/suppliersFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui";
import { Plus } from "lucide-react";
import { useSupplier } from "@/hooks/useSupplier";

export const ButtonSupplierForm = ({ editData, setEditData }) => {
  const { addSupplier, editSupplier } = useSupplier();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const methods = useForm({
    resolver: zodResolver(suppliersFormSchema),
  });

  const { register, handleSubmit, reset, setValue, formState: { errors } } = methods;

  useEffect(() => {
    if (editData) {
      initializeForm(editData);
      setIsDialogOpen(true);
    }
  }, [editData, setValue]);

  const initializeForm = (data) => {
    setValue("name", data.name);
    setValue("dni", data.dni);
    setValue("email", data.email);
    setValue("phone", data.phone);
  };

  const onSubmit = (data) => {
    if (editData) {
      editSupplier({ ...data, id: editData.id });
      setEditData(null);
    } else {
      addSupplier({ ...data, id: Date.now() });
    }
    reset();
    setIsDialogOpen(false);
  };

  return (
    <div className="flex justify-end mb-4">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" onClick={() => setIsDialogOpen(true)}>
            <Plus /> Añadir Proveedor
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editData ? "Editar Proveedor" : "Agregar Nuevo Proveedor"}
            </DialogTitle>
          </DialogHeader>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-10 py-4">
                <div className="flex flex-col gap-4">
                  <FormItem>
                    <FormLabel htmlFor="name">Nombre</FormLabel>
                    <FormControl>
                      <input id="name" {...register("name")} className="input" />
                    </FormControl>
                    {errors.name && <FormMessage>{errors.name.message}</FormMessage>}
                  </FormItem>
                  <FormItem>
                    <FormLabel htmlFor="dni">DNI</FormLabel>
                    <FormControl>
                      <input id="dni" {...register("dni")} className="input" />
                    </FormControl>
                    {errors.dni && <FormMessage>{errors.dni.message}</FormMessage>}
                  </FormItem>
                </div>
                <div className="flex flex-col gap-4">
                  <FormItem>
                    <FormLabel htmlFor="email">Correo</FormLabel>
                    <FormControl>
                      <input id="email" {...register("email")} className="input" />
                    </FormControl>
                    {errors.email && <FormMessage>{errors.email.message}</FormMessage>}
                  </FormItem>
                  <FormItem>
                    <FormLabel htmlFor="phone">Telefono</FormLabel>
                    <FormControl>
                      <input id="phone" {...register("phone")} className="input" />
                    </FormControl>
                    {errors.phone && <FormMessage>{errors.phone.message}</FormMessage>}
                  </FormItem>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Guardar Cambios</Button>
              </DialogFooter>
            </form>
          </FormProvider>
        </DialogContent>
      </Dialog>
    </div>
  );
};
