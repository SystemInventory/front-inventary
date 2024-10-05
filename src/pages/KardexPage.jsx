import { getFilter } from "@/utils/getFilter";
import { useState } from "react";
import { useKardex } from "@/hooks/useKardex";
import { InputSearch } from "@/components/common/InputSearch";
import { ButtonKardexForm } from "@/components/ButtonForms/ButtonKardexForm";
import { TableSkeleton } from "@/components/common/Skeleton/TableSkeleton";
import { KardexTable } from "@/components/Tables/KardexTable";
import { headers } from "@/utils/headers/getHeaderKardex";
import { ContainerLayout } from "@/layout/ContainerLayout";

export const KardexPage = () => {
  const { kardex, isLoading, handleDelete } = useKardex();
  const [editData, setEditData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { itemFilter } = getFilter(kardex, searchTerm);

  return (
    <ContainerLayout>
      <div className="flex justify-between text-center">
        <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ButtonKardexForm editData={editData} setEditData={setEditData} />
      </div>
      {isLoading ? (
        <TableSkeleton headers={headers} />
      ) : (
        <KardexTable
          kardex={itemFilter.length > 0 ? itemFilter : kardex}
          setEditData={setEditData}
          handleDelete={handleDelete}
        />
      )}
    </ContainerLayout>
  );
};
