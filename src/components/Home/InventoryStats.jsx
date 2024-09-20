import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Package, Boxes } from "lucide-react";

export const InventoryStats = () => {
  return (
    <div className="flex w-full  flex-col gap-4 items-center">
      <Card className="flex flex-col w-full p-2">
        <div className="flex justify-between mx-2">
          <CardTitle>Inventario Bajo</CardTitle>
          <Package />
        </div>
        <div className="flex flex-col">
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

      <Card className="flex flex-col w-full p-2">
        <div className="flex justify-between mx-2">
          <CardTitle className="mr-2">Productos</CardTitle>
          <Boxes />
        </div>
        <div className="flex flex-col">
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
    </div>
  );
};
