import { SquarePen, Trash2 } from "lucide-react";
import { Badge, Button, Card, CardContent, CardFooter, CardHeader } from "./ui";

export const CardProduct = () => {
  return (
    <Card className="transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
      <CardHeader>
        <figure className="w-full border mx-auto">
          <img src="https://boticaportugal.com/cdn/shop/products/9342026100.png?v=1654017754" />
        </figure>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <p className="text-lg font-semibold">Paracetamol 500mg</p>
          <span><Badge variant="outline">Analgesicos</Badge></span>
        </div>
        <p className="text-xs text-gray-500">Codigo :PRD001</p>
        <span className="font-semibold">Analgesico y antipiretico</span>
        <div className="flex justify-between">
          <span className="font-semibold">$5.99</span>
          <span>100 unidades</span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-1">
        <Button variant="outline"><SquarePen />Editar</Button>
        <Button variant="outline"><Trash2 color="red" />Eliminar</Button>
      </CardFooter>
    </Card>
  );
};