import { schema } from "@/lib/zod-validations/dataFormSchema";
import { createPersonell, fillAllPersonell, removePersonell, updatePersonell } from "@/services/personall.service";
import { usePersonnelStore } from "@/stores/usePersonnelStore";
import { Toast } from "@/utils/Toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export const usePersonnel = (editData, setEditData) => {
  const personal = usePersonnelStore((state) => state.personal);
  const addPersonal = usePersonnelStore((state) => state.addPersonal);
  const editPersonal = usePersonnelStore((state) => state.editPersonal);
  const deletePersonal = usePersonnelStore((state) => state.deletePersonal);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchPersonell = async () => {
      const data = await fillAllPersonell();
      if (data) {
        usePersonnelStore.setState({ personal: data });
      }
      setIsLoading(false);
    };
    fetchPersonell();
  }, []);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const methods = useForm({
    resolver: zodResolver(schema),
  });
  const { setValue, handleSubmit, reset } = methods;

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

  const onSubmit = async(data) => {
    if (editData) {
      const updatePersonall = await updatePersonell(editData.id,data)
      editPersonal(updatePersonall);
      setEditData(null);
      Toast.fire({
        icon: "success",
        title: "Personal actualizado con éxito",
      });
    } else {
  
      const newPersonal = await createPersonell(data);
      addPersonal(newPersonal);
      console.log(newPersonal);
      Toast.fire({
        icon: "success",
        title: "Personal creado con éxito",
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
          await deletePersonal(id); 
          removePersonell(id); 
          Swal.fire({
            title: "¡Eliminado!",
            text: "El registro ha sido eliminado.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error al eliminar el personal:", error);
          Swal.fire({
            title: "Error",
            text: "No se pudo eliminar el personal.",
            icon: "error",
          });
        }
      }
    });
  };
  return {
    addPersonal,
    editPersonal,
    personal,
    deletePersonal,
    handleDelete,
    onSubmit,
    isDialogOpen,
    setIsDialogOpen,
    methods,
    handleSubmit: handleSubmit(onSubmit),
    isLoading,
  };
};
