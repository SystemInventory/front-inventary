import { ButtonSupplierForm } from "@/components/ButtonForms/ButtonSupplierForm";
import { InputSearch } from "@/components/common/InputSearch";
import { SuppliersTable } from "@/components/Tables/SuppliersTable";
import { TableSkeleton } from "@/components/common/Skeleton/TableSkeleton";
import { useSupplier } from "@/hooks/useSupplier";
import { getFilter } from "@/utils/getFilter";
import { useState } from "react";
import { headers } from "@/utils/headers/getHeaderCategory";
import { ContainerLayout } from "@/layout/ContainerLayout";

export const SuppliersPage = () => {
  const { suppliers, isLoading, handleDelete } = useSupplier();
  const [editData, setEditData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ContainerLayout>
      <div className="flex justify-between ">
        <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ButtonSupplierForm editData={editData} setEditData={setEditData} />
      </div>

      {isLoading ? (
        <TableSkeleton headers={headers} />
      ) : (
        <SuppliersTable
          suppliers={suppliers}
          setEditData={setEditData}
          handleDelete={handleDelete}
        />
      )}
    </ContainerLayout>
  );
};
