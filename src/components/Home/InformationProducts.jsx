import { product } from "@/data/product";
import { Card, CardContent, CardTitle } from "../ui";
import { Boxes } from "lucide-react";

export const InformationProducts = () => {
  return (
    <Card className="flex flex-col w-full p-2 h-full">
    <div className="flex justify-between mx-2">
      <CardTitle className="mr-2">Productos</CardTitle>
      <Boxes />
    </div>
    <div className="flex flex-col flex-1 overflow-y-auto">
      {product.map((item) => (
        <CardContent key={item.id} className="flex justify-between">
          {item.nameProduct}
          <span className="text-red-600 font-semibold">{item.units}</span>
        </CardContent>
      ))}
    </div>
  </Card>
  );
};
