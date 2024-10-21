import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Package } from "lucide-react";
import { UpcomingExpirations } from "./UpcomingExpirations";
import { InformationProducts } from "./InformationProducts";
import { useProduct } from "@/hooks/useProduct";

export const InventoryStats = () => {
  const { product } = useProduct();
  const productFilter = product.filter((item) => item.units < 20);
  return (
    <div className="flex flex-col lg:flex-row w-full  h-full gap-4">
      <UpcomingExpirations />
      <Card className="flex flex-col w-full p-2 h-full">
        <div className="flex justify-between mx-2">
          <CardTitle>Inventario Bajo</CardTitle>
          <Package />
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
         
          {productFilter.map((item) => (
            <CardContent key={item.id} className="flex justify-between">
              {item.nameProduct}
              <span className="text-red-600 font-semibold">
                {item.units}
              </span>
            </CardContent>
          ))}
        </div>
      </Card>

      <InformationProducts />
    </div>
  );
};
