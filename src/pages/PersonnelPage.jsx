import { ButtonForm } from "@/components/ButtonForm";
import { TableInformation } from "@/components/TableInformation";
import { TableSkeleton } from "@/components/TableSkeleton";
import { usePersonnelStore } from "@/stores/usePersonnelStore";
import { useEffect, useState } from "react";

export const PersonnelPage = () => {
  const personal = usePersonnelStore((state) => state.personal);
  const [isLoading, setIsLoading] = useState(true);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <ButtonForm editData={editData} setEditData={setEditData} />
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <TableInformation personal={personal} setEditData={setEditData} />
      )}
    </div>
  );
};
