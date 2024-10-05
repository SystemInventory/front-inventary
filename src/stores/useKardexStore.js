import { kardex } from "@/data/kardex";
import { create } from "zustand";

export const useKardexStore = create((set) => ({
  kardex: kardex,
  addKardex: (newKardex) =>
    set((state) => ({ kardex: [newKardex,...state.kardex ] })), 
  editKardex: (updateKardex) =>
    set((state) => ({
      kardex: state.kardex.map((item) =>
        item.id === updateKardex.id ? updateKardex : item
      ),
    })),
  deleteKardex: (id) =>
    set((state) => ({
      kardex: state.kardex.filter((item) => item.id !== id),
    })),
}));