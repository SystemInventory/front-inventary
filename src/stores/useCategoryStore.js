import { categories } from "@/data/categories.js";
import { create } from "zustand";

export const useCategoryStore = create((set) => ({
  categories: categories,
  addCategory: (newCategory) =>
    set((state) => ({
      categories: [...state.categories, newCategory],
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