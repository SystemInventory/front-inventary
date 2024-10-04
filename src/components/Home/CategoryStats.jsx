import { Card, CardTitle } from "@/components/ui/card";
import { personal } from "@/data/personal";
import { product } from "@/data/product";
import { useCategory } from "@/hooks/useCategory";
import { Package, ShoppingBag, ContactRound } from "lucide-react";

export const CategoryStats = () => {
   const{categories} = useCategory()
  return (
    <div className="flex justify-center flex-col w-full md:w-1/4 min-w-[200px]">
      <div className="flex flex-col gap-4 md:gap-16">
        <Card className="p-2 flex flex-col h-28">
          <div className="flex items-center justify-between">
            <CardTitle className="mr-2">Categorias</CardTitle>
            <Package />
          </div>
          <div className="flex-grow flex justify-center items-end">
            <span className="font-bold text-4xl">{categories.length}</span>
          </div>
        </Card>

        <Card className="p-2 flex flex-col h-28">
          <div className="flex items-center justify-between">
            <CardTitle className="mr-2">Total de productos</CardTitle>
            <ShoppingBag />
          </div>
          <div className="flex-grow flex justify-center items-end">
            <span className="font-bold text-4xl">{product.length}</span>
          </div>
        </Card>

        <Card className="p-2 flex flex-col h-28">
          <div className="flex items-center justify-between">
            <CardTitle className="mr-2">Personal</CardTitle>
            <ContactRound />
          </div>
          <div className="flex-grow flex justify-center items-end">
            <span className="font-bold text-4xl">{personal.length}</span>
          </div>
        </Card>
      </div>
    </div>
  );
};
