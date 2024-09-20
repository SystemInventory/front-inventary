import { usePersonnelStore } from "@/stores/usePersonnelStore";

export const usePersonnel = () => {
  const personal = usePersonnelStore((state) => state.personal);
  const addPersonal = usePersonnelStore((state) => state.addPersonal);
  const editPersonal = usePersonnelStore((state) => state.editPersonal);
  const deletePersonal = usePersonnelStore((state) => state.deletePersonal);

  return {
    addPersonal,
    editPersonal,
    personal,
    deletePersonal,
  };
};
