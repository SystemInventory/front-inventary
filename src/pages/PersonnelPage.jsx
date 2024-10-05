import { ButtonForm } from "@/components/ButtonForms/ButtonForm";
import { InputSearch } from "@/components/common/InputSearch";
import { TableInformation } from "@/components/Tables/PersonalTable";
import { TableSkeleton } from "@/components/common/Skeleton/TableSkeleton";
import { usePersonnel } from "@/hooks/usePersonnel";
import { getFilter } from "@/utils/getFilter";
import { useState } from "react";

export const PersonnelPage = () => {
  const { personal, isLoading } = usePersonnel();
  const [editData, setEditData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { itemFilter } = getFilter(personal, searchTerm);
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
      <div className="flex justify-between text-center">
        <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ButtonForm editData={editData} setEditData={setEditData} />
      </div>

      {isLoading ? (
        <TableSkeleton headers={headers} />
      ) : (
        <TableInformation
          personal={searchTerm ? itemFilter : personal}
          setEditData={setEditData}
        />
      )}
    </div>
  );
};
