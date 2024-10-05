import { TableHead, TableRow } from "@/components/ui";

export const TableHeaderRow = ({ headers }) => (
    <TableRow>
      {headers.map((header, index) => (
        <TableHead key={index} className={header.className || ''}>
          {header.label}
        </TableHead>
      ))}
    </TableRow>
  );
  