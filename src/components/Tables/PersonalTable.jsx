import { SquarePen, Trash2 } from "lucide-react";
import {
  Table,
  Button,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui";
import { useKardex } from "@/hooks/useKardex";
import Swal from "sweetalert2";

export const TableInformation = ({ personal, setEditData,handleDelete }) => {
  const { kardex } = useKardex();

  const handleDeleteWithCheck = (id) => {
    const isUserInKardex = kardex.some((item) => item.user.id === id);
    if (isUserInKardex) {
      Swal.fire({
        title: "Error",
        text: "No se puede eliminar este usuario ya que está siendo utilizado en el Kardex.",
        icon: "error",
      });
    } else {
      handleDelete(id);
    }
  };
  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full divide-y divide-gray-200">
        <TableHeader>
          <TableRow className="text-center">
            <TableHead>Nombre</TableHead>
            <TableHead>DNI</TableHead>
            <TableHead>Correo</TableHead>
            <TableHead>Telefono</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white divide-y divide-gray-200">
          {personal.map((person) => (
            <TableRow key={person.id}>
              <TableCell>{person.name}</TableCell>
              <TableCell>{person.dni}</TableCell>
              <TableCell>{person.email}</TableCell>
              <TableCell>{person.phone}</TableCell>
              <TableCell>{person.isActive ? "Activo" : "Inactivo"}</TableCell>
              <TableCell className="text-center">
                <Button
                  className=""
                  variant="outline"
                  onClick={() => setEditData(person)}
                >
                  <SquarePen />
                  <span className="hidden sm:inline">Editar</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleDeleteWithCheck(person.id)}
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