import { kardexFormSchema } from "@/lib/zod-validations/kardexFormSchema";
import {
  createKardex,
  fillAllKardex,
  generateReport,
  removeKardex,
  updateKardex,
} from "@/services/kardex.service";
import { useKardexStore } from "@/stores/useKardexStore";
import { Toast } from "@/utils/Toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { saveAs } from 'file-saver';
export const useKardex = (editData, setEditData) => {
  const kardex = useKardexStore((state) => state.kardex);
  const addKardex = useKardexStore((state) => state.addKardex);
  const editKardex = useKardexStore((state) => state.editKardex);
  const deleteKardex = useKardexStore((state) => state.deleteKardex);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchKardex = async () => {
      const data = await fillAllKardex();
      if (data) {
        useKardexStore.setState({ kardex: data });
      }
      setIsLoading(false);
    };
    fetchKardex();
  }, []);

  const methods = useForm({
    resolver: zodResolver(kardexFormSchema),
  });
  const { handleSubmit, reset, setValue } = methods;

  useEffect(() => {
    if (editData) {
      setValue("id", editData.id);
      setValue("product", editData.productName);
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

  const onSubmit = async (data) => {
    const kardexData = {
      ...data,
      productName: data.productName,
      user: data.user,
      supplier: data.supplier,
    };

    try {
      if (editData) {
        const updatedKardex = await updateKardex(editData.id, kardexData);
        editKardex(updatedKardex);
        setEditData(null);
        Toast.fire({
          icon: "success",
          title: "Kardex actualizado con éxito",
        });
      } else {
        const newKardex = await createKardex(kardexData);
        addKardex(newKardex);
        Toast.fire({
          icon: "success",
          title: "Kardex creado con éxito",
        });
      }
      reset();
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Error al crear o actualizar el kardex:", error);
      Toast.fire({
        icon: "error",
        title: "Error al crear o actualizar el kardex",
      });
    }
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
          await deleteKardex(id);
          removeKardex(id);
          Swal.fire({
            title: "¡Eliminado!",
            text: "El kardex ha sido eliminado.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error al eliminar la kardex:", error);
          Swal.fire({
            title: "Error",
            text: "No se pudo eliminar la kardex.",
            icon: "error",
          });
        }
      }
    });
  };
  const handleExport = async () => {
    const reportBlob = await generateReport();
    saveAs(reportBlob, "empresary.xls");
  };
  return {
    kardex,
    addKardex,
    editKardex,
    handleDelete,
    isDialogOpen,
    setIsDialogOpen,
    isLoading,
    methods,
    onSubmit,
    handleSubmit: handleSubmit(onSubmit),
    handleExport,
  };
};
