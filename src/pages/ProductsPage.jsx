import { useState } from "react";
import { ButtonProductsForm } from "@/components/ButtonForms/ButtonProductsForm";
import { GridProducts } from "@/components/common/GridProducts";
import { useProduct } from "@/hooks/useProduct";
import { CardProductSkeleton } from "@/components/common/Skeleton/CardProductSkeleton";
import { ContainerLayout } from "@/layout/ContainerLayout";

export const ProductsPage = () => {
  const [editData, setEditData] = useState(null);
  const { product, isLoading } = useProduct();

  return (
    <ContainerLayout>
      <div className="flex justify-between text-center">
        <ButtonProductsForm editData={editData} setEditData={setEditData} />
      </div>
      {isLoading ? (
        <CardProductSkeleton />
      ) : (
        <GridProducts product={product} setEditData={setEditData} />
      )}
    </ContainerLayout>
  );
};
