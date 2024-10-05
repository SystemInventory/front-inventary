import { ButtonSupplierForm } from "@/components/ButtonForms/ButtonSupplierForm";
import { InputSearch } from "@/components/common/InputSearch";
import { SuppliersTable } from "@/components/Tables/SuppliersTable";
import { TableSkeleton } from "@/components/common/Skeleton/TableSkeleton";
import { useSupplier } from "@/hooks/useSupplier";
import { getFilter } from "@/utils/getFilter";
import { useState } from "react";

export const SuppliersPage = () => {
  const { suppliers, isLoading } = useSupplier();
  const [editData, setEditData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const headers = [
    { label: "Nombre", className: "w-[100px]" },
    { label: "DNI" },
    { label: "Correo" },
    { label: "Telefono" },
    { label: "Status" },
    { label: "Acciones", className: "text-center" },
  ];
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between ">
        <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ButtonSupplierForm editData={editData} setEditData={setEditData} />
      </div>

      {isLoading ? (
        <TableSkeleton headers={headers} />
      ) : (
        <SuppliersTable suppliers={suppliers} setEditData={setEditData} />
      )}
    </div>
  );
};
