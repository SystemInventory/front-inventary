import { kardexFormSchema } from "@/lib/zod-validations/kardexFormSchema";
import { useKardexStore } from "@/stores/useKardexStore";
import { Toast } from "@/utils/Toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export const useKardex = (editData, setEditData) => {
  const kardex = useKardexStore((state) => state.kardex);
  const addKardex = useKardexStore((state) => state.addKardex);
  const editKardex = useKardexStore((state) => state.editKardex);
  const deleteKardex = useKardexStore((state) => state.deleteKardex);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const methods = useForm({
    resolver: zodResolver(kardexFormSchema),
  });
  const { handleSubmit, reset, setValue } = methods;

  useEffect(() => {
    if (editData) {
      setValue("id", editData.id);
      setValue("product", editData.product);
      setValue("tipoTransacction", editData.tipoTransacction);
      setValue("count", editData.count);
      setValue("description", editData.description);
      setValue("userId", editData.userId);
      setValue("expirationDate", editData.expirationDate);
      setValue("supplierId", editData.supplierId);
      setValue("dateOperation", editData.dateOperation);
      setIsDialogOpen(true);
    }
  }, [editData, setValue]);

  const onSubmit = (data) => {
    console.log("onSubmit called with data:", data);
    if (editData) {
      editKardex({ ...data, id: editData.id });
      setEditData(null);
      Toast.fire({
        icon: "success",
        title: "Kardex actualizado con éxito",
      });
    } else {
      const newKardex = { ...data, id: Date.now() };
      addKardex(newKardex);
      console.log(newKardex);
      Toast.fire({
        icon: "success",
        title: "Kardex creado con éxito",
      });
    }
    reset();
    setIsDialogOpen(false);

  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, ¡elimínalo!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteKardex(id);
        Swal.fire({
          title: "¡Eliminado!",
          text: "El registro ha sido eliminado.",
          icon: "success",
        });
      }
    });
  };

  return {
    kardex,
    addKardex,
    editKardex,
    handleDelete,
    isDialogOpen,
    setIsDialogOpen,
    isLoading,
    methods,
    onSubmit,
    handleSubmit: handleSubmit(onSubmit),
  };
};
