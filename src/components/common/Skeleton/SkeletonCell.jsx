import { Skeleton } from "@/components/ui";

export const SkeletonCell = ({ width }) => (
  <td className="px-6 py-4">
    <Skeleton className={`h-4 ${width}`} />
  </td>
);
