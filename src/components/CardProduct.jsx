import { SquarePen, Trash2 } from "lucide-react";
import { Badge, Button, Card, CardContent, CardFooter, CardHeader } from "./ui";

export const CardProduct = ({
  codigo,
  name,
  category,
  description,
  price,
  units,
  imageUrl,
}) => {
  return (
    <Card className="transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer flex flex-col">
      <CardHeader>
        <figure className="w-full border mx-auto">
          <img src={`${imageUrl}`} />
        </figure>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <p className="text-lg font-semibold">{name}</p>
          <span>
            <Badge variant="outline">{category}</Badge>
          </span>
        </div>
        <p className="text-xs text-gray-500">Codigo{codigo}</p>
        <span className="font-semibold">{description}</span>
        <div className="flex justify-between">
          <span className="font-semibold">${price}</span>
          <span>{units} unidades</span>
        </div>
      </CardContent>

      <CardFooter className="flex gap-1  mt-auto">
        <Button variant="outline">
          <SquarePen />
          Editar
        </Button>
        <Button variant="outline">
          <Trash2 color="red" />
          Eliminar
        </Button>
      </CardFooter>
    </Card>
  );
};
