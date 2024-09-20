import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { schema } from "@/lib/zod-validations/dataFormSchema";
import { usePersonnel } from "@/hooks/usePersonnel";
import FormField from "./FormField";

export const ButtonForm = ({ editData, setEditData }) => {
  const { addPersonal, editPersonal } = usePersonnel();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  useEffect(() => {
    if (editData) {
      setValue("name", editData.name);
      setValue("dni", editData.dni);
      setValue("email", editData.email);
      setValue("phone", editData.phone);
      setIsDialogOpen(true);
    }
  }, [editData, setValue]);

  const onSubmit = (data) => {
    if (editData) {
      editPersonal({ ...data, id: editData.id });
      setEditData(null);
    } else {
      addPersonal({ ...data, id: Date.now() });
    }
    reset();
    setIsDialogOpen(false);
  };

  return (
    <div className="flex justify-end mb-4">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" onClick={() => setIsDialogOpen(true)}>
            <Plus /> Añadir Personal
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editData ? "Editar Personal" : "Agregar Nuevo Personal"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-10 py-4">
              <div className="flex flex-col gap-4">
                <FormField
                  id="name"
                  label="Name"
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
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
