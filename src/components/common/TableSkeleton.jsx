import {
  Skeleton,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui";

export const TableSkeleton = () => {
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
          {Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
              <td className="px-6 py-4">
                <Skeleton className="h-4 w-3/4" />
              </td>
              <td className="px-6 py-4">
                <Skeleton className="h-4 w-1/2" />
              </td>
              <td className="px-6 py-4">
                <Skeleton className="h-4 w-3/4" />
              </td>
              <td className="px-6 py-4">
                <Skeleton className="h-4 w-1/2" />
              </td>
              <td className="px-6 py-4 text-center">
                <Skeleton className="h-4 w-1/4 inline-block" />
                <Skeleton className="h-4 w-1/4 inline-block ml-2" />
              </td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
