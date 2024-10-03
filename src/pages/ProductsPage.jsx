import { useState } from "react";

import { useProductStore } from "@/stores/useProductStore";
import { ButtonProductsForm } from "@/components/ButtonProductsForm";
import { GridProducts } from "@/components/GridProducts";

export const ProductsPage = () => {
  const [editData, setEditData] = useState(null);
  const product = useProductStore((state) => state.product);

  return (
    <div>
      <ButtonProductsForm editData={editData} setEditData={setEditData} />
      <GridProducts product={product} setEditData={setEditData} />
    </div>
  );
};