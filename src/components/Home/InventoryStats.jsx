import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Package} from "lucide-react";
import { UpcomingExpirations } from "./UpcomingExpirations";
import { InformationProducts } from "./InformationProducts";

export const InventoryStats = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full  h-full gap-4">
      <UpcomingExpirations />
      <Card className="flex flex-col w-full p-2 h-full">
        <div className="flex justify-between mx-2">
          <CardTitle>Inventario Bajo</CardTitle>
          <Package />
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <CardContent className="flex justify-between">
            Paracetamol 200g
            <span className="text-red-600 font-semibold">200</span>
          </CardContent>
          <CardContent className="flex justify-between">
            Ibuprofeno 250g
            <span className="text-orange-700 font-semibold">150</span>
          </CardContent>
          <CardContent className="flex justify-between">
            Amozilina 500g
            <span className="text-orange-600 font-semibold">50</span>
          </CardContent>
        </div>
      </Card>

      <InformationProducts />
    </div>
  );
};