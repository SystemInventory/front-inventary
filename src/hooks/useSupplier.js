import { suppliersFormSchema } from "@/lib/zod-validations/suppliersFormSchema";
import { useSupplierStore } from "@/stores/useSupplierStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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
      setIsDialogOpen(true);
    }
  }, [editData, setValue]);

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

  return {
    addSupplier,
    editSupplier,
    suppliers,
    deleteSupplier,
    onSubmit,
    isDialogOpen,
    setIsDialogOpen,
    methods,
    handleSubmit: handleSubmit(onSubmit),
    isLoading,
  };
};
