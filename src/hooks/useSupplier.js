import { useSupplierStore } from "@/stores/useSupplierStore";

export const useSupplier = () => {
  const suppliers = useSupplierStore((state) => state.supplier);
  const addSupplier = useSupplierStore((state) => state.addSupplier);
  const editSupplier = useSupplierStore((state) => state.editSupplier);
  const deleteSupplier = useSupplierStore((state) => state.deleteSupplier);
  return {
    addSupplier,
    editSupplier,
    suppliers,
    deleteSupplier,
  };
};
