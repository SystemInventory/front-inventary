import { ButtonCategoriesForm } from "@/components/ButtonForms/ButtonCategoriesForm";
import { InputSearch } from "@/components/common/InputSearch";
import { TableSkeleton } from "@/components/common/Skeleton/TableSkeleton";
import { CategoriesTable } from "@/components/Tables/CategoriesTable.jsx";
import { useCategory } from "@/hooks/useCategory";
import { ContainerLayout } from "@/layout/ContainerLayout";
import { getFilter } from "@/utils/getFilter";
import { headers } from "@/utils/headers/getHeaderCategory";
import { useState } from "react";

export const CategoryPage = () => {
  const { categories, isLoading, handleDelete } = useCategory();
  const [editData, setEditData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { itemFilter } = getFilter(categories, searchTerm);

  return (
    <ContainerLayout>
      <div className="flex justify-between text-center">
        <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ButtonCategoriesForm editData={editData} setEditData={setEditData} />
      </div>

      {isLoading ? (
        <TableSkeleton headers={headers} />
      ) : (
        <CategoriesTable
          categories={searchTerm ? itemFilter : categories}
          setEditData={setEditData}
          handleDelete={handleDelete}
        />
      )}
    </ContainerLayout>
  );
};
