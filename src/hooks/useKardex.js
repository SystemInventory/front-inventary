import { kardexFormSchema } from "@/lib/zod-validations/kardexFormSchema";
import { useKardexStore } from "@/stores/useKardexStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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
    } else {
      const newKardex = { ...data, id: Date.now() }
      addKardex(newKardex);
      console.log(newKardex)
    }
    reset();
    setIsDialogOpen(false);
  };

  return {
    kardex,
    addKardex,
    editKardex,
    deleteKardex,
    isDialogOpen,
    setIsDialogOpen,
    isLoading,
    methods,
    onSubmit,
    handleSubmit: handleSubmit(onSubmit),
  };
};