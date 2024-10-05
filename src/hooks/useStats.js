import { ContactRound, Package, ShoppingBag } from "lucide-react";
import { useCategory } from "./useCategory";
import { usePersonnel } from "./usePersonnel";
import { useProduct } from "./useProduct";

export const useStats = () => {
  const { product: products } = useProduct();
  const { categories: categories } = useCategory();
  const { personal: personal } = usePersonnel();

  return [
    { title: "Categorias", count: () => categories.length, icon: Package },
    {
      title: "Total de productos",
      count: () => products.length,
      icon: ShoppingBag,
    },
    { title: "Personal", count: () => personal.length, icon: ContactRound },
  ];
};
