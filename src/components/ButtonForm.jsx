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
  Input,
  Label,
} from "@/components/ui";

import { Plus } from "lucide-react";
import { schema } from "@/lib/zod-validations/dataFormSchema";
import { usePersonnel } from "@/hooks/usePersonnel";

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
      setValue("invoice", editData.invoice);
      setValue("paymentStatus", editData.paymentStatus);
      setValue("totalAmount", editData.totalAmount);
      setValue("paymentMethod", editData.paymentMethod);
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
                <div className="grid grid-cols-4 items-center gap-16">
                  <Label htmlFor="invoice" className="text-right">
                    Nombre
                  </Label>
                  <Input
                    id="invoice"
                    {...register("invoice")}
                    className="col-span-3"
                  />
                  {errors.invoice && <p>{errors.invoice.message}</p>}
                </div>

                <div className="grid grid-cols-4 items-center gap-16">
                  <Label htmlFor="paymentStatus" className="text-right">
                    DNI
                  </Label>
                  <Input
                    id="paymentStatus"
                    {...register("paymentStatus")}
                    className="col-span-3"
                  />
                  {errors.paymentStatus && (
                    <p>{errors.paymentStatus.message}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-4 items-center gap-16">
                  <Label htmlFor="totalAmount" className="text-right">
                    Correo
                  </Label>
                  <Input
                    id="totalAmount"
                    {...register("totalAmount")}
                    className="col-span-3"
                  />
                  {errors.totalAmount && <p>{errors.totalAmount.message}</p>}
                </div>

                <div className="grid grid-cols-4 items-center gap-16">
                  <Label htmlFor="paymentMethod" className="text-right">
                    Telefono
                  </Label>
                  <Input
                    id="paymentMethod"
                    {...register("paymentMethod")}
                    className="col-span-3"
                  />
                  {errors.paymentMethod && (
                    <p>{errors.paymentMethod.message}</p>
                  )}
                </div>
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
