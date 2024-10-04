import { useProductStore } from "@/stores/useProductStore";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { productFormSchema } from "@/lib/zod-validations/productFormSchema";

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

  useEffect(() => {
    if (editData) {
      setValue("id", editData.id);
      setValue("codigo", editData.codigo);
      setValue("nameProduct", editData.nameProduct);
      setValue("category", editData.category);
      setValue("description", editData.description);
      setValue("price", editData.price);
      setValue("units", editData.units);
      setValue("imageUrl", editData.imageUrl);
      setIsDialogOpen(true);
    }
  }, [editData, setValue]);


  const onSubmit = (data) => {
    console.log("onSubmit called with data:", data); 
    if (editData) {
      editProduct({ ...data, id: editData.id });
      setEditData(null);
    } else {
      const newProduct = { ...data, id: Date.now() };
      addProduct(newProduct);
      console.log("Producto creado:", newProduct); 
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
    onSubmit,
    handleSubmit: handleSubmit(onSubmit),

  };
};