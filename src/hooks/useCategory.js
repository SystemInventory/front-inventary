import { categoriesFormSchema } from "@/lib/zod-validations/categoriesFormSchema";
import { createCategory, fillAllCategories, removeCategory, updateCategory } from "@/services/category.service";
import { useCategoryStore } from "@/stores/useCategoryStore";
import { Toast } from "@/utils/Toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export const useCategory = (editData, setEditData) => {
  const categories = useCategoryStore((store) => store.categories);
  const addCategory = useCategoryStore((store) => store.addCategory);
  const editCategory = useCategoryStore((store) => store.editCategory);
  const deleteCategory = useCategoryStore((store) => store.deleteCategory);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      const data = await fillAllCategories();
      if (data) {
        useCategoryStore.setState({ categories: data }); 
      }
      setIsLoading(false);
    };
    fetchCategory();
  }, []);
  const methods = useForm({
    resolver: zodResolver(categoriesFormSchema),
  });

  const { handleSubmit, reset, setValue } = methods;

  useEffect(() => {
    if (editData) {
      setValue("name", editData.name);
      setValue("description", editData.description);
      setValue("isActive", editData.isActive);
      setIsDialogOpen(true);
    }
  }, [editData, setValue]);

  const onSubmit = async(data) => {
    if (editData) {
      const updatedCategory = await updateCategory(editData.id, data);
      editCategory(updatedCategory);
      setEditData(null);
      Toast.fire({
        icon: "success",
        title: "Categoria actualizada con éxito",
      });
    } else {
      const newCategory = await createCategory(data);
      addCategory(newCategory);
      console.log(newCategory)
      Toast.fire({
        icon: "success",
        title: "Categoria creada con éxito",
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
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteCategory(id); 
          removeCategory(id); 
          Swal.fire({
            title: "¡Eliminado!",
            text: "El registro ha sido eliminado.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error al eliminar la categoria:", error);
          Swal.fire({
            title: "Error",
            text: "No se pudo eliminar la categoria.",
            icon: "error",
          });
        }
      }
    });
  };
  return {
    categories,
    addCategory,
    editCategory,
    deleteCategory,handleDelete,
    onSubmit,
    setIsDialogOpen,
    handleSubmit: handleSubmit(onSubmit),
    isDialogOpen,
    isLoading,
    methods,
  };
};
