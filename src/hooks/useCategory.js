import { categoriesFormSchema } from "@/lib/zod-validations/categoriesFormSchema";
import { useCategoryStore } from "@/stores/useCategoryStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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
      setIsDialogOpen(true);
    }
  }, [editData, setValue]);
  
  const onSubmit = (data) => {
    if (editData) {
      editCategory({ ...data, id: editData.id });
      setEditData(null);
    } else {
      addCategory({ ...data, id: Date.now() });
    }
    reset();
    setIsDialogOpen(false);
  };
  return {
    categories,
    addCategory,
    editCategory,
    deleteCategory,
    onSubmit,
    setIsDialogOpen,
    handleSubmit: handleSubmit(onSubmit),
    isDialogOpen,
    isLoading,
    methods,
  };
};
