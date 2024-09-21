import { ButtonSupplierForm } from "@/components/ButtonSupplierForm";
import { InputSearch } from "@/components/InputSearch";
import { SuppliersTable } from "@/components/SuppliersTable";
import { TableSkeleton } from "@/components/TableSkeleton";
import { useSupplier } from "@/hooks/useSupplier";
import { getFilter } from "@/utils/getFilter";
import {  useState } from "react";

export const SuppliersPage = () => {
  const { suppliers ,isLoading} = useSupplier();
  const [editData, setEditData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const{itemFilter} = getFilter(suppliers,searchTerm)
  
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between ">
      <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ButtonSupplierForm editData={editData} setEditData={setEditData} />
      </div>

      {isLoading ? (
        <TableSkeleton />
      ) : (
        <SuppliersTable
          suppliers={suppliers ? itemFilter : suppliers}
          setEditData={setEditData}
        />
      )}
    </div>
  );
};
