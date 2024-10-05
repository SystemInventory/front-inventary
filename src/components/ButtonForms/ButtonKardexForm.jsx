import { useKardex } from "@/hooks/useKardex";
import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui";
import { Plus } from "lucide-react";
import { FormProvider } from "react-hook-form";
import { KardexForm } from "../Forms/KardexForm";

export const ButtonKardexForm = ({ editData, setEditData }) => {
  const { isDialogOpen, setIsDialogOpen, methods, handleSubmit } = useKardex(editData, setEditData);

  return (
    <div className="flex justify-end mb-4">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" onClick={() => setIsDialogOpen(true)}>
            <Plus /> Añadir Kardex
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editData ? "Editar Kardex" : "Agregar Nuevo Kardex"}</DialogTitle>
          </DialogHeader>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit}>
              <KardexForm />
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