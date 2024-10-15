import * as XLSX from "xlsx";
import { suppliers } from "@/data/suppliers";
import { personal } from "@/data/personal";

const supplierMap = suppliers.reduce((acc, supplier) => {
  acc[supplier.id] = supplier.name;
  return acc;
}, {});

const personalMap = personal.reduce((acc, person) => {
  acc[person.id] = person.name;
  return acc;
}, {});

export const exportToExcel = (data, fileName = "kardex.xlsx") => {
  const filteredData = data.map(({ id, userId, supplierId, ...rest }) => ({
    ...rest,
    userName: personalMap[userId],
    supplierName: supplierMap[supplierId],
  }));

  const headers = [
    "Fecha Operacion",
    "Producto",
    "Tipo Transaccion",
    "Cantidad",
    "Descripcion",
    "Fecha Expiracion",
    "Personal",
    "Proveedor",
  ];

  const worksheet = XLSX.utils.json_to_sheet(filteredData, {
    skipHeader: true,
  });
  XLSX.utils.sheet_add_aoa(worksheet, [headers], { origin: "A1" });
  const colWidths = headers.map(() => ({ wpx: 150 }));
  worksheet["!cols"] = colWidths;
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Kardex");
  const range = XLSX.utils.decode_range(worksheet["!ref"]);
  worksheet["!autofilter"] = { ref: XLSX.utils.encode_range(range) };
  XLSX.writeFile(workbook, fileName);
};
