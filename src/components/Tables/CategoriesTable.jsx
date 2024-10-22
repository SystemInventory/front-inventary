import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/index.js";
import { useProduct } from "@/hooks/useProduct";
import { SquarePen, Trash2 } from "lucide-react";
import Swal from "sweetalert2";

export const CategoriesTable = ({ setEditData, categories, handleDelete }) => {
  const{product} = useProduct();

  const handleDeleteWithCheck = (id) => {
    const isProductInCategory = product.some((item) => item.category.id === id);
    if (isProductInCategory) {
      Swal.fire({
        title: "Error",
        text: "No se puede eliminar esta categoria ya que está siendo utilizada en un producto.",
        icon: "error",
      });
    } else {
      handleDelete(id);
    }
  }

  
  return (
    <div className="overflow-hidden">
      <Table className="min-w-full divide-y divide-gray-200">
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Descripcion</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{category.name}</TableCell>
              <TableCell>{category.description}</TableCell>
              <TableCell>{category.isActive ? "Activo" : "Inactivo"}</TableCell>
              <TableCell>
                <Button variant="outline" onClick={() => setEditData(category)}>
                  <SquarePen />
                  <span className="hidden sm:inline">Editar</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleDeleteWithCheck(category.id)}
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
