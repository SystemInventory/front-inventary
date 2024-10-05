import { useState } from "react";
import { ButtonProductsForm } from "@/components/ButtonForms/ButtonProductsForm";
import { GridProducts } from "@/components/common/GridProducts";
import { useProduct } from "@/hooks/useProduct";
import { CardProductSkeleton } from "@/components/common/CardProductSkeleton";

export const ProductsPage = () => {
  const [editData, setEditData] = useState(null);
  const { product, isLoading } = useProduct();

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between text-center">
        <ButtonProductsForm editData={editData} setEditData={setEditData} />
      </div>
      {isLoading ? (
        <CardProductSkeleton />
      ) : (
        <GridProducts product={product} setEditData={setEditData} />
      )}
    </div>
  );
};
