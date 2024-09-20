import { ButtonSupplierForm } from "@/components/ButtonSupplierForm";
import { SuppliersTable } from "@/components/SuppliersTable";
import { TableSkeleton } from "@/components/TableSkeleton";
import { useSupplierStore } from "@/stores/useSupplierStore";
import { useEffect, useState } from "react";

export const SuppliersPage = () => {
  const suppliers = useSupplierStore((state) => state.supplier )
  const [isLoading,setIsLoading] = useState(true)
  const [editData, setEditData] = useState(null);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="container mx-auto px-4">
      <ButtonSupplierForm editData={editData} setEditData={setEditData} />
      {isLoading?(
        <TableSkeleton/>
      ):
      (
        <SuppliersTable suppliers={suppliers} setEditData={setEditData} />
      )
      }
    </div>
  );
};
