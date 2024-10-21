import { useState } from "react";
import { useKardex } from "@/hooks/useKardex";
import { ButtonKardexForm } from "@/components/ButtonForms/ButtonKardexForm";
import { TableSkeleton } from "@/components/common/Skeleton/TableSkeleton";
import { KardexTable } from "@/components/Tables/KardexTable";
import { headers } from "@/utils/headers/getHeaderKardex";
import { ContainerLayout } from "@/layout/ContainerLayout";
import { Button } from "@/components/ui";


export const KardexPage = () => {
  const { kardex, isLoading, handleDelete,handleExport } = useKardex();
  const [editData, setEditData] = useState(null);

  return (
    <ContainerLayout>
      <div className="flex  text-center">
      <Button variant="outline" onClick={handleExport}>
        Exportar a Excel
      </Button>
        <ButtonKardexForm editData={editData} setEditData={setEditData} />
      </div>
      {isLoading ? (
        <TableSkeleton headers={headers} />
      ) : (
        <KardexTable
          kardex={ kardex}
          setEditData={setEditData}
          handleDelete={handleDelete}
        />
      )}
    </ContainerLayout>
  );
};
