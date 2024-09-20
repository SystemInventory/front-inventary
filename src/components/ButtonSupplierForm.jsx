import { suppliersFormSchema } from "@/lib/zod-validations/suppliersFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
} from "@/components/ui";
import { Plus } from "lucide-react";
import { useSupplier } from "@/hooks/useSupplier";
import FormField from "@/components/FormField"; // Importa el componente FormField

export const ButtonSupplierForm = ({ editData, setEditData }) => {
  const { addSupplier, editSupplier } = useSupplier();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(suppliersFormSchema),
  });

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-10 py-4">
              <div className="flex flex-col gap-4">
                <FormField
                  id="name"
                  label="Nombre"
                  register={register}
                  errors={errors}
                />
                <FormField
                  id="dni"
                  label="DNI"
                  register={register}
                  errors={errors}
                />
              </div>
              <div className="flex flex-col gap-4">
                <FormField
                  id="email"
                  label="Correo"
                  register={register}
                  errors={errors}
                />
                <FormField
                  id="phone"
                  label="Telefono"
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Guardar Cambios</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
