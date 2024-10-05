import { categoriesFormSchema } from "@/lib/zod-validations/categoriesFormSchema";
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
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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

  const onSubmit = (data) => {
    if (editData) {
      editCategory({ ...data, id: editData.id });
      setEditData(null);
      Toast.fire({
        icon: "success",
        title: "Categoria actualizada con éxito",
      });
    } else {
      const newCategory = { ...data, id: Date.now() };
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
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCategory(id);
        Swal.fire({
          title: "¡Eliminado!",
          text: "El registro ha sido eliminado.",
          icon: "success",
        });
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
