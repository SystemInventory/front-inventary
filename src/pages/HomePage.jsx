import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  ArchiveX,
  Boxes,
  ContactRound,
  Package,
  ShoppingBag,
} from "lucide-react";

export const HomePage = () => {
  return (
    <div className=" gap-32 flex mx-auto justify-center ">
      {/* Contenedor de la Sección 1 */}
      <div className="flex justify-center flex-col w-1/4 min-w-[200px]">
        {/* SECCION 1 */}
        <div className="flex flex-col gap-16">
          <Card className="p-2 flex flex-col h-28">
            <div className="flex items-center justify-between">
              <CardTitle className="mr-2">Categorias</CardTitle>
              <Package />
            </div>
            <div className="flex-grow flex justify-center items-end">
              <span className="font-bold text-4xl">500</span>
            </div>
          </Card>

          <Card className="p-2 flex flex-col h-28">
            <div className="flex items-center justify-between">
              <CardTitle className="mr-2">Pedidos Recientes</CardTitle>
              <ShoppingBag />
            </div>
            <div className="flex-grow flex justify-center items-end">
              <span className="font-bold text-4xl">50</span>
            </div>
          </Card>

          <Card className="p-2 flex flex-col h-28">
            <div className="flex items-center justify-between">
              <CardTitle className="mr-2">Personal</CardTitle>
              <ContactRound />
            </div>
            <div className="flex-grow flex justify-center items-end">
              <span className="font-bold text-4xl">250</span>
            </div>
          </Card>
        </div>
      </div>
      {/* Contenedor de las Secciones 2 y 3 */}
      <div className="flex  w-[40%]  flex-col  gap-4 items-center">
        {/* SECCION 2 */}
        <div className="flex  w-full max-w-md flex-col gap-4 items-center">
          <Card className="flex flex-col w-full p-2 ">
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

          <Card className="flex  flex-col w-full max-w-md p-2">
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

        {/* SECCION 3 */}
        <Card className="p-4 w-full max-w-md  overflow-auto">
          <div className="flex justify-between mx-2">
            <CardTitle>Proximos Vencimientos</CardTitle>
            <ArchiveX />
          </div>
          <div className="flex flex-col max-h-32 flex-1 overflow-y-auto">
            <CardContent className="flex justify-between">
              Aspirina 200mg
              <span className="text-red-600 font-semibold">200</span>
            </CardContent>
            <CardContent className="flex justify-between">
              Metformina 850mg
              <span className="text-orange-700 font-semibold">50</span>
            </CardContent>
            <CardContent className="flex justify-between">
              Atorvastina 500mg
              <span className="text-orange-600 font-semibold">150</span>
            </CardContent>
            <CardContent className="flex justify-between">
              Ibuprofeno 250g
              <span className="text-orange-700 font-semibold">150</span>
            </CardContent>
            <CardContent className="flex justify-between">
              Amozilina 500g
              <span className="text-orange-600 font-semibold">50</span>
            </CardContent>
            <CardContent className="flex justify-between">
              Amozilina 500g
              <span className="text-orange-600 font-semibold">50</span>
            </CardContent>
            <CardContent className="flex justify-between">
              Amozilina 500g
              <span className="text-orange-600 font-semibold">50</span>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
};
