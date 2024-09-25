import { getFilter } from "@/utils/getFilter";
import { useState } from "react";
import { useKardex } from "@/hooks/useKardex";
import { InputSearch } from "@/components/common/InputSearch";
import { ButtonKardexForm } from "@/components/ButtonKardexForm";
import { TableSkeleton } from "@/components/common/TableSkeleton";
import { KardexTable } from "@/components/Tables/KardexTable";

export const KardexPage = () => {
  const { kardex, isLoading } = useKardex();
  const [editData, setEditData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { itemFilter } = getFilter(kardex, searchTerm);

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between text-center">
        <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ButtonKardexForm editData={editData} setEditData={setEditData} />
      </div>
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <KardexTable
          kardex={itemFilter.length > 0 ? itemFilter : kardex}
          setEditData={setEditData}
        />
      )}
    </div>
  );
};