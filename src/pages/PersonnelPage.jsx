import { ButtonForm } from "@/components/ButtonForm";
import { InputSearch } from "@/components/InputSearch";
import { TableInformation } from "@/components/TableInformation";
import { TableSkeleton } from "@/components/TableSkeleton";
import { Input } from "@/components/ui";
import { usePersonnel } from "@/hooks/usePersonnel";
import { getFilter } from "@/utils/getFilter";
import { useState } from "react";

export const PersonnelPage = () => {
  const {personal,isLoading} = usePersonnel()
  const [editData, setEditData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const {itemFilter} = getFilter(personal,searchTerm)
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between text-center">
      <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ButtonForm editData={editData} setEditData={setEditData} />
      </div>

      {isLoading ? (
        <TableSkeleton />
      ) : (
        <TableInformation
          personal={searchTerm ? itemFilter : personal}
          setEditData={setEditData}
        />
      )}
    </div>
  );
};
