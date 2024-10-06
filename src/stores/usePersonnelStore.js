import { create } from "zustand";
export const usePersonnelStore = create((set) => ({
  personal: [],
  addPersonal: (newPersonal) =>
    set((state) => ({
      personal: [newPersonal,...state.personal ],
    })),
  editPersonal: (updatePersonal) =>
    set((state) => ({
      personal: state.personal.map((person) =>
        person.id === updatePersonal.id ? updatePersonal : person
      ),
    })),
  deletePersonal: (id) =>
    set((state) => ({
      personal: state.personal.filter((person) => person.id !== id),
    })),
}));
