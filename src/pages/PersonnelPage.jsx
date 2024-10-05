import { ButtonForm } from "@/components/ButtonForms/ButtonForm";
import { InputSearch } from "@/components/common/InputSearch";
import { TableInformation } from "@/components/Tables/PersonalTable";
import { TableSkeleton } from "@/components/common/Skeleton/TableSkeleton";
import { usePersonnel } from "@/hooks/usePersonnel";
import { getFilter } from "@/utils/getFilter";
import { useState } from "react";
import { headers } from "@/utils/headers/getHeaderPersonell";
import { ContainerLayout } from "@/layout/ContainerLayout";

export const PersonnelPage = () => {
  const { personal, isLoading ,handleDelete} = usePersonnel();
  const [editData, setEditData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { itemFilter } = getFilter(personal, searchTerm);

  return (
    <ContainerLayout>
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
          handleDelete={handleDelete}
        />
      )}
    </ContainerLayout>
  );
};
