import { productFormSchema } from "@/lib/zod-validations/produdctFormShema";
import { useProductStore } from "@/stores/useProductStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const useProduct = (editData, setEditData) => {
  const product = useProductStore((state) => state.product);
  const addProduct = useProductStore((state) => state.addProduct);
  const editProduct = useProductStore((state) => state.editProduct);
  const deleteProduct = useProductStore((state) => state.deleteProduct);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const methods = useForm({
    resolver: zodResolver(productFormSchema),
  });
  const { handleSubmit, reset, setValue } = methods;
  
  const onSubmit = (data) => {
    if (editData) {
      editProduct({ ...data, id: editData.id });
      setEditData(null);
    } else {
      addProduct({ ...data, id: Date.now() });
    }
    reset();
    setIsDialogOpen(false);
  };
  return {
    setIsDialogOpen,
    isLoading,
    isDialogOpen,
    deleteProduct,
    editProduct,
    addProduct,
    product,
    methods,
    handleSubmit: handleSubmit(onSubmit),
  };
};
