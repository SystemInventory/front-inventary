import {
  Skeleton,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui";
import { SkeletonCell } from "./SkeletonCell";
import { TableHeaderRow } from "./TableHeaderRow";

export const TableSkeleton = ({headers}) => {
  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full divide-y divide-gray-200">
        <TableHeader>
        <TableHeaderRow headers={headers} />
        </TableHeader>
        <TableBody className="bg-white divide-y divide-gray-200">
        {Array.from({ length: `${ headers.length }` }).map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {Array.from({ length: `${ headers.length }` }).map((_, colIndex) => (
                <td key={colIndex} className="px-6 py-4">
                  <Skeleton className="h-4 w-full" />
                </td>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
