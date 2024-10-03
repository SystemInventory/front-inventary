import { ButtonProductsForm } from "@/components/ButtonProductsForm";
import { CardProductSkeleton } from "@/components/common/CardProductSkeleton";
import { GridProducts } from "@/components/GridProducts";
import { useProduct } from "@/hooks/useProduct";
import { useState } from "react";

export const ProductsPage = () => {
  const { product, isLoading } = useProduct();
  const [editData, setEditData] = useState(null);
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between text-center">
        <ButtonProductsForm />
      </div>
      {isLoading ? (
        <CardProductSkeleton />
      ) : (
        <GridProducts setEditData={setEditData} />
      )}
    </div>
  );
};
