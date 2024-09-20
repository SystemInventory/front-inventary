import { SquarePen, Trash2 } from "lucide-react";
import {
  Table,
  Button,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui";
import { usePersonnelStore } from "@/stores/usePersonnelStore";

export const TableInformation = ({ personal, setEditData }) => {
  const deletePersonal = usePersonnelStore((state) => state.deletePersonal);
  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full divide-y divide-gray-200">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Nombre</TableHead>
            <TableHead>DNI</TableHead>
            <TableHead>Correo</TableHead>
            <TableHead>Telefono</TableHead>
            <TableHead className="text-center">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white divide-y divide-gray-200">
          {personal.map((person) => (
            <TableRow key={person.id}>
              <TableCell className="font-medium">{person.invoice}</TableCell>
              <TableCell className="text-left">{person.paymentStatus}</TableCell>
              <TableCell>{person.totalAmount}</TableCell>
              <TableCell>{person.paymentMethod}</TableCell>
              <TableCell className="text-center">
                <Button className="" variant="outline" onClick={() => setEditData(person)}>
                  <SquarePen />
                  <span className="hidden sm:inline">Editar</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => deletePersonal(person.id)}
                >
                  <Trash2 color="red" />
                  <span className="hidden sm:inline">Eliminar</span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
