import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArchiveX } from "lucide-react";

export const UpcomingExpirations = () => {
  return (
    <Card className="p-4 flex flex-col w-full  ">
      <div className="flex justify-between mx-2">
        <CardTitle>Proximos Vencimientos</CardTitle>
        <ArchiveX />
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto">
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
        <CardContent className="flex justify-between">
          Amozilina 500g
          <span className="text-orange-600 font-semibold">50</span>
        </CardContent> <CardContent className="flex justify-between">
          Amozilina 500g
          <span className="text-orange-600 font-semibold">50</span>
        </CardContent> <CardContent className="flex justify-between">
          Amozilina 500g
          <span className="text-orange-600 font-semibold">50</span>
        </CardContent> <CardContent className="flex justify-between">
          Amozilina 500g
          <span className="text-orange-600 font-semibold">50</span>
        </CardContent>
      </div>
    </Card>
  );
};
