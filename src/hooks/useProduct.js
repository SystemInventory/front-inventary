import { useProductStore } from "@/stores/useProductStore";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { productFormSchema } from "@/lib/zod-validations/productFormSchema";
import Swal from "sweetalert2";
import { Toast } from "@/utils/Toast";

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
      setValue("isActive", editData.isActive);
      setValue("imageUrl", editData.imageUrl);
      setIsDialogOpen(true);
    }
  }, [editData, setValue]);


  const onSubmit = (data) => {
    console.log("onSubmit called with data:", data); 
    if (editData) {
      const updatedProduct = {
        ...data,
        id: editData.id,
        imageUrl: data.imageUrl || editData.imageUrl,
      };
      editProduct(updatedProduct);
      setEditData(null);
    } else {
      const newProduct = { ...data, id: Date.now() };
      addProduct(newProduct);
      console.log("Producto creado:", newProduct); 
    }
    reset();
    setIsDialogOpen(false);
    Toast.fire({
      icon: "success",
      title: "Operación realizada con éxito",
    });
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
        deleteProduct(id);
        Swal.fire({
          title: "¡Eliminado!",
          text: "El registro ha sido eliminado.",
          icon: "success",
        });
      }
    });
  };
  return {
    setIsDialogOpen,
    isLoading,
    isDialogOpen,
    deleteProduct,handleDelete,
    editProduct,
    addProduct,
    product,
    methods,
    onSubmit,
    handleSubmit: handleSubmit(onSubmit),

  };
};