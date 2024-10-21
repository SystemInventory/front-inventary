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

export const KardexTable = ({ kardex, setEditData, handleDelete }) => {
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
              <TableCell>{item.productName}</TableCell>
              <TableCell>{item.tipoTransacction}</TableCell>
              <TableCell>{item.count}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.supplier.name}</TableCell>
              <TableCell>{item.expirationDate}</TableCell>
              <TableCell>{item.user.name}</TableCell>
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
