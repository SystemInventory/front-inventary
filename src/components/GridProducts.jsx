import { product } from "@/data/product";
import { CardProduct } from "./CardProduct";

export const GridProducts = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {product.map((item) => (
        <CardProduct
          key={item.id}
          codigo={item.codigo}
          name={item.name}
          category={item.category}
          description={item.description}
          price={item.price}
          units={item.units}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};
