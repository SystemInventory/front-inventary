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
import { SupplierForm } from "./Forms/SupplierForm";
import { FormProvider } from "react-hook-form";

export const ButtonSupplierForm = ({ editData, setEditData }) => {
  const { isDialogOpen, setIsDialogOpen, methods, handleSubmit } = useSupplier(
    editData,
    setEditData
  );
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
            <form onSubmit={handleSubmit}>
              <SupplierForm />
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
