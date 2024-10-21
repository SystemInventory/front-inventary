import { useKardex } from "@/hooks/useKardex";
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
import Swal from "sweetalert2";

export const SuppliersTable = ({ suppliers, setEditData,handleDelete }) => {
  const { kardex } = useKardex();

  const handleDeleteWithCheck = (id) => {
    const isSupplierInKardex = kardex.some((item) => item.supplier.id === id);
    if (isSupplierInKardex) {
      Swal.fire({
        title: "Error",
        text: "No se puede eliminar este proveedor ya que está siendo utilizado en el Kardex.",
        icon: "error",
      });
    } else {
      handleDelete(id);
    }
  };

  return (
    <div className="overflow-hidden">
      <Table className="min-w-full divide-y divide-gray-200">
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>DNI</TableHead>
            <TableHead>Correo</TableHead>
            <TableHead>Telefono</TableHead>
            <TableHead>Status</TableHead>
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
              <TableCell>{suppier.isActive ? "Activo":"Inactivo"}</TableCell>
              <TableCell>
                <Button variant="outline" onClick={() => setEditData(suppier)}>
                  <SquarePen />
                  <span className="hidden sm:inline">Editar</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleDeleteWithCheck(suppier.id)}
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
