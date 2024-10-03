import { ButtonCategoriesForm } from "@/components/ButtonCategoriesForm";
import { InputSearch } from "@/components/common/InputSearch";
import { TableSkeleton } from "@/components/common/TableSkeleton";
import { CategoriesTable } from "@/components/Tables/CategoriesTable.jsx";
import { useCategory } from "@/hooks/useCategory";
import { getFilter } from "@/utils/getFilter";
import { useState } from "react";

export const CategoryPage = () => {
  const { categories, isLoading } = useCategory();
  const [editData, setEditData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between text-center">
        <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ButtonCategoriesForm editData={editData} setEditData={setEditData} />
      </div>

      {isLoading ? (
        <TableSkeleton />
      ) : (
        <CategoriesTable
          categories={categories }
          setEditData={setEditData}
        />
      )}
    </div>
  );
};