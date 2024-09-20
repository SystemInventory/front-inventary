import { ButtonForm } from "@/components/ButtonForm";
import { TableInformation } from "@/components/TableInformation";
import { TableSkeleton } from "@/components/TableSkeleton";
import { Input } from "@/components/ui";
import { usePersonnel } from "@/hooks/usePersonnel";
import { useEffect, useState } from "react";

export const PersonnelPage = () => {
  const {personal} = usePersonnel()
  const [isLoading, setIsLoading] = useState(true);
  const [editData, setEditData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPersonal = personal.filter((person) =>
    person.invoice?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between text-center">
        <Input
          type="text"
          placeholder="Name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-1/4"
           
        />
        <ButtonForm editData={editData} setEditData={setEditData} />
      </div>

      {isLoading ? (
        <TableSkeleton />
      ) : (
        <TableInformation
          personal={searchTerm ? filteredPersonal : personal}
          setEditData={setEditData}
        />
      )}
    </div>
  );
};
