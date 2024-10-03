
import { useProduct } from "@/hooks/useProduct";
import { Button, Card, CardContent, CardFooter, CardHeader } from "./ui";
import { Badge, SquarePen, Trash2 } from "lucide-react";

export const GridProducts = ({product, setEditData }) => {
  const {deleteProduct} = useProduct()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {product.map((item) => (
       <Card key={item.id} className="transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer flex flex-col">
       <CardHeader>
         <figure className="w-full border mx-auto">
           <img src={`${item.imageUrl}`} />
         </figure>
       </CardHeader>
       <CardContent>
         <div className="flex justify-between">
           <p className="text-lg font-semibold">{item.name}</p>
           <span>
             <Badge variant="outline">{item.category}</Badge>
           </span>
         </div>
         <p className="text-xs text-gray-500">Codigo{item.codigo}</p>
         <span className="font-semibold">{item.description}</span>
         <div className="flex justify-between">
           <span className="font-semibold">${item.price}</span>
           <span>{item.units} unidades</span>
         </div>
       </CardContent>
 
       <CardFooter className="flex gap-1  mt-auto">
         <Button variant="outline" onClick={() =>setEditData(item)} >
           <SquarePen />
           Editar
         </Button>
         <Button variant="outline" onClick={()=> deleteProduct (item.id)} >
           <Trash2 color="red" />
           Eliminar
         </Button>
       </CardFooter>
     </Card>
      ))}
    </div>
  );
};
