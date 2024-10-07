import { create } from "zustand";

export const useProductStore = create((set) => ({
  product: [],
  addProduct: (newProduct) =>
    set((state) => ({ 
      product: [newProduct,...state.product] 
    })),
  editProduct: (updateProduct) =>
    set((state) => ({
      product: state.product.map((item) =>
        item.id === updateProduct.id ? updateProduct : item
      ),
    })),
  deleteProduct: (id) =>
    set((state) => ({
      product: state.product.filter((item) => item.id !== id),
    })),
}));
