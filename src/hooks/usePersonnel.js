import { schema } from "@/lib/zod-validations/dataFormSchema";
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
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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

  const onSubmit = (data) => {
    if (editData) {
      editPersonal({ ...data, id: editData.id });
      setEditData(null);
    } else {
      const newPersonal = { ...data, id: Date.now() };
      addPersonal(newPersonal);
      console.log(newPersonal);
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
        deletePersonal(id);
        Swal.fire({
          title: "¡Eliminado!",
          text: "El registro ha sido eliminado.",
          icon: "success",
        });
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
