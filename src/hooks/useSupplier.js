import { suppliersFormSchema } from "@/lib/zod-validations/suppliersFormSchema";
import { useSupplierStore } from "@/stores/useSupplierStore";
import { Toast } from "@/utils/Toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export const useSupplier = (editData, setEditData) => {
  const suppliers = useSupplierStore((state) => state.supplier);
  const addSupplier = useSupplierStore((state) => state.addSupplier);
  const editSupplier = useSupplierStore((state) => state.editSupplier);
  const deleteSupplier = useSupplierStore((state) => state.deleteSupplier);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  const methods = useForm({
    resolver: zodResolver(suppliersFormSchema),
  });
  const { handleSubmit, reset, setValue } = methods;

  useEffect(() => {
    if (editData) {
      setValue("name", editData.name);
      setValue("dni", editData.dni);
      setValue("email", editData.email);
      setValue("phone", editData.phone);
      setValue("isActive", editData.isActive);
      setIsDialogOpen(true);
    }
  }, [editData, setValue]);

  const onSubmit = (data) => {
    if (editData) {
      editSupplier({ ...data, id: editData.id });
      setEditData(null);
      Toast.fire({
        icon: "success",
        title: "Proveedor actualizado con éxito",
      });
    } else {
      const newSupplier = { ...data, id: Date.now() };
      addSupplier(newSupplier);
      console.log(newSupplier);
      Toast.fire({
        icon: "success",
        title: "Proveedor creado con éxito",
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
        deleteSupplier(id);
        Swal.fire({
          title: "¡Eliminado!",
          text: "El registro ha sido eliminado.",
          icon: "success",
        });
      }
    });
  };

  return {
    addSupplier,
    editSupplier,
    suppliers,
    deleteSupplier,
    handleDelete,
    onSubmit,
    isDialogOpen,
    setIsDialogOpen,
    methods,
    handleSubmit: handleSubmit(onSubmit),
    isLoading,
  };
};
