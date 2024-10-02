import { create } from "zustand";

export const useSupplierStore = create((set) => ({
  supplier: [],
  addSupplier: (newSupplier) =>
    set((state) => ({ supplier: [...state.supplier, newSupplier] })),
  editSupplier: (updateSupplier) =>
    set((state) => ({
      supplier: state.supplier.map((person) =>
        person.id === updateSupplier.id ? updateSupplier : person
      ),
    })),
  deleteSupplier: (id) =>
    set((state) => ({
      supplier: state.supplier.filter((person) => person.id !== id),
    })),
}));
