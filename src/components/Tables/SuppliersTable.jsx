import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui";
import { SquarePen, Trash2 } from "lucide-react";
import { useSupplierStore } from "@/stores/useSupplierStore";

export const SuppliersTable = ({ suppliers, setEditData }) => {
  const deleteSupplier = useSupplierStore((state) => state.deleteSupplier);
  return (
    <div className="overflow-hidden">
      <Table className="min-w-full divide-y divide-gray-200">
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>DNI</TableHead>
            <TableHead>Correo</TableHead>
            <TableHead>Telefono</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {suppliers.map((suppier) => (
            <TableRow key={suppier.id}>
              <TableCell>{suppier.name}</TableCell>
              <TableCell>{suppier.dni}</TableCell>
              <TableCell>{suppier.email}</TableCell>
              <TableCell>{suppier.phone}</TableCell>
              <TableCell>
                <Button variant="outline" onClick={() => setEditData(suppier)}>
                  <SquarePen />
                  <span className="hidden sm:inline">Editar</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => deleteSupplier(suppier.id)}
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
