import { ButtonSupplierForm } from "@/components/ButtonSupplierForm";
import { SuppliersTable } from "@/components/SuppliersTable";
import { TableSkeleton } from "@/components/TableSkeleton";
import { Input } from "@/components/ui";
import { useSupplierStore } from "@/stores/useSupplierStore";
import { useEffect, useState } from "react";

export const SuppliersPage = () => {
  const suppliers = useSupplierStore((state) => state.supplier )
  const [isLoading,setIsLoading] = useState(true)
  const [editData, setEditData] = useState(null);
  const [searchTerm,setSearchTerm] = useState("")
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  const handleSearchChange=({target})=>{
    setSearchTerm(target.value)
  }
  const filterSupplier = suppliers.filter((supplier)=>
    supplier.name?.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  )
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between ">
      <Input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-1/4"
      />
      <ButtonSupplierForm editData={editData} setEditData={setEditData} />
      </div>
     
      {isLoading?(
        <TableSkeleton/>
      ):
      (
        <SuppliersTable suppliers={suppliers ? filterSupplier:suppliers} setEditData={setEditData} />
      )
      }
    </div>
  );
};
