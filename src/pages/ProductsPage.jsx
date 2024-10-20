import { useState } from "react";
import { ButtonProductsForm } from "@/components/ButtonForms/ButtonProductsForm";
import { GridProducts } from "@/components/common/GridProducts";
import { useProduct } from "@/hooks/useProduct";
import { CardProductSkeleton } from "@/components/common/Skeleton/CardProductSkeleton";
import { ContainerLayout } from "@/layout/ContainerLayout";
import { InputSearch } from "@/components/common/InputSearch";
import { getFilter } from "@/utils/getFilter";

export const ProductsPage = () => {
  const [editData, setEditData] = useState(null);
  const { product, isLoading, handleDelete } = useProduct();
  const [searchTerm, setSearchTerm] = useState("");
  const { itemFilter } = getFilter(product, searchTerm);

  return (
    <ContainerLayout>
      <div className="flex justify-between text-center">
        <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ButtonProductsForm editData={editData} setEditData={setEditData} />
      </div>
      {isLoading ? (
        <CardProductSkeleton />
      ) : (
        <GridProducts
          product={ searchTerm ? itemFilter : product}
          setEditData={setEditData}
          handleDelete={handleDelete}
        />
      )}
    </ContainerLayout>
  );
};
