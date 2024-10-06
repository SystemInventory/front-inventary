import { create } from "zustand";

export const useCategoryStore = create((set) => ({
  categories: [],
  addCategory: (newCategory) =>
    set((state) => ({
      categories: [newCategory,...state.categories ],
    })),
  editCategory: (updateCategory) =>
    set((state) => ({
      categories: state.categories.map((category) =>
        category.id === updateCategory.id ? updateCategory : category
      ),
    })),
  deleteCategory: (id) =>
    set((state) => ({
      categories: state.categories.filter((category) => category.id !== id),
    })),
}));