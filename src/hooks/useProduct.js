import { useProductStore } from "@/stores/useProductStore";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { productFormSchema } from "@/lib/zod-validations/productFormSchema";
import Swal from "sweetalert2";
import { Toast } from "@/utils/Toast";
import { createProduct, fillAllProducts, removeProduct } from "@/services/products.service";

export const useProduct = (editData, setEditData) => {
  const product = useProductStore((state) => state.product);
  const addProduct = useProductStore((state) => state.addProduct);
  const editProduct = useProductStore((state) => state.editProduct);
  const deleteProduct = useProductStore((state) => state.deleteProduct);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct= async () => {
      const data = await fillAllProducts();
      if (data) {
        useProductStore.setState({ product: data });
      }
      setIsLoading(false);
    };
    fetchProduct();
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


  const onSubmit = async(data) => {
    console.log("onSubmit called with data:", data); 
    if (editData) {
      const updatedProduct = {
        ...data,
        id: editData.id,
        imageUrl: data.imageUrl || editData.imageUrl,
      };
      editProduct(updatedProduct);
      setEditData(null);
      Toast.fire({
        icon: "success",
        title: "Producto actualizado con éxito",
      });
    } else {
      const newProduct = await createProduct(data);
      addProduct(newProduct);
      console.log("Producto creado:", newProduct); 
      Toast.fire({
        icon: "success",
        title: "Producto creado con éxito",
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
    }).then(async(result) => {
      if (result.isConfirmed) {
        try {
          await deleteProduct(id); 
          removeProduct(id); 
          Swal.fire({
            title: "¡Eliminado!",
            text: "El producto ha sido eliminado.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error al eliminar el producto:", error);
          Swal.fire({
            title: "Error",
            text: "No se pudo eliminar el producto.",
            icon: "error",
          });
        }
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