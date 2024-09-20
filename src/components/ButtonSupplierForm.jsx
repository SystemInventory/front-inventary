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
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Button, Input, Label } from "./ui";
import { useSupplier } from "@/hooks/useSupplier";

export const ButtonSupplierForm = ({editData,setEditData}) => {
  const {addSupplier,editSupplier} = useSupplier()
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver:zodResolver(suppliersFormSchema)
  });
  useEffect(() => {
      if(editData){
        setValue("name",editData.name)
        setValue("dni",editData.dni)
        setValue("email",editData.email)
        setValue("phone",editData.phone)
        setIsDialogOpen(true)
      }
  }, [editData,setValue])
  
 const onSubmit=(data)=>{
   if(editData){
    editSupplier({...data, id:editData.id})
    setEditData(null)
   }else{
    addSupplier({...data,id:Date.now()})
   }
   reset()
   setIsDialogOpen(false)
 }
  return  <div className="flex justify-end mb-4">
  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
    <DialogTrigger asChild>
      <Button variant="outline" onClick={() => setIsDialogOpen(true)}>
        <Plus /> Añadir Proveedor
      </Button>
    </DialogTrigger>
    <DialogContent >
      <DialogHeader>
        <DialogTitle>{editData ? "Editar Personal" : "Agregar Nuevo Personal"}</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-10 py-4">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-4 items-center gap-16">
              <Label htmlFor="invoice" className="text-right">
                Nombre
              </Label>
              <Input
                id="name"
                {...register("name")}
                className="col-span-3"
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>

            <div className="grid grid-cols-4 items-center gap-16">
              <Label htmlFor="paymentStatus" className="text-right">
                DNI
              </Label>
              <Input
                id="dni"
                {...register("dni")}
                className="col-span-3"
              />
              {errors.dni && <p>{errors.dni.message}</p>}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-4 items-center gap-16">
              <Label htmlFor="totalAmount" className="text-right">
                Correo
              </Label>
              <Input
                id="email"
                {...register("email")}
                className="col-span-3"
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div className="grid grid-cols-4 items-center gap-16">
              <Label htmlFor="paymentMethod" className="text-right">
                Telefono
              </Label>
              <Input
                id="phone"
                {...register("phone")}
                className="col-span-3"
              />
              {errors.phone && <p>{errors.phone.message}</p>}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Guardar Cambios</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</div>;
};
