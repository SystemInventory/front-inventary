import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui";
import { Plus } from "lucide-react";
import { FormProvider } from "react-hook-form";
import { useProduct } from "@/hooks/useProduct";
import { ProductForm } from "./Forms/ProductForm";

export const ButtonProductsForm = ({ editData, setEditData }) => {
  const { isDialogOpen, setIsDialogOpen, methods, handleSubmit } = useProduct(
    editData,
    setEditData
  );

  return (
    <div className="flex justify-end mb-4">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" onClick={() => setIsDialogOpen(true)}>
            <Plus /> Añadir Producto
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full max-w-4xl">
          <DialogHeader>
            <DialogTitle>
              {editData ? "Editar Producto" : "Agregar Nuevo Producto"}
            </DialogTitle>
          </DialogHeader>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit((data) => {
                console.log("Form submitted with data:", data); // Agregar este console.log
                handleSubmit(data);
              })}
            >
              <ProductForm />
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