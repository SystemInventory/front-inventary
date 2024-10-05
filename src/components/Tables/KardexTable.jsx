import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui";

import { personal } from "@/data/personal";
import { useSupplier } from "@/hooks/useSupplier";
import { SquarePen, Trash2 } from "lucide-react";

export const KardexTable = ({ kardex, setEditData, handleDelete }) => {
  const { suppliers } = useSupplier();
  const getSupplierName = (supplierId) => {
    const supplier = suppliers.find((supplier) => supplier.id === supplierId);
    return supplier ? supplier.name : "Desconocido";
  };

  const getUserName = (userId) => {
    const user = personal.find((user) => user.id === userId);
    return user ? user.name : "Desconocido";
  };

  return (
    <div className="overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Fecha Operacion</TableHead>
            <TableHead>Producto</TableHead>
            <TableHead>Tipo Transaccion</TableHead>
            <TableHead>Cantidad</TableHead>
            <TableHead>Descripcion</TableHead>
            <TableHead>Usuario</TableHead>
            <TableHead>Fecha Vencimiento</TableHead>
            <TableHead>Proveedor</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {kardex.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.dateOperation}</TableCell>
              <TableCell>{item.product}</TableCell>
              <TableCell>{item.tipoTransacction}</TableCell>
              <TableCell>{item.count}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{getUserName(item.userId)}</TableCell>
              <TableCell>{item.expirationDate}</TableCell>
              <TableCell>{getSupplierName(item.supplierId)}</TableCell>
              <TableCell>
                <Button variant="outline" onClick={() => setEditData(item)}>
                  <SquarePen />
                </Button>
                <Button variant="outline" onClick={() => handleDelete(item.id)}>
                  <Trash2 color="red" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
