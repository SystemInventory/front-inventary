import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/index.js";
import { useCategoryStore } from "@/stores/useCategoryStore.js";
import { SquarePen, Trash2 } from "lucide-react";

export const CategoriesTable = ({ setEditData, categories }) => {
  const deleteCategory = useCategoryStore((state) => state.deleteCategory);
  return (
    <div className="overflow-hidden">
      <Table className="min-w-full divide-y divide-gray-200">
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Descripcion</TableHead>
            <TableHead className="">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{category.name}</TableCell>
              <TableCell>{category.description}</TableCell>
              <TableCell>
                <Button variant="outline" onClick={() => setEditData(category)}>
                  <SquarePen />
                  <span className="hidden sm:inline">Editar</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => deleteCategory(category.id)}
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