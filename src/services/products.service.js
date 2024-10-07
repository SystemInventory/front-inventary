import { API } from "@/constants/API";
import axios from "axios";

export const fillAllProducts = async () => {
  try {
    const { data } = await axios.get(`${API}/products`);
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error al traer los productos", error);
    throw error;
  }
};
export const getProductById = async (id) => {
  try {
    const { data } = axios.get(`${API}/showFormForUpdate/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error al traer el producto de id ", id);
    throw error;
  }
};
export const createProduct = async (product) => {
  try {
    const { data } = await axios.post(`${API}/products`, product, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error al crear el producto", product);
    throw error;
  }
};

export const removeProduct = async (id) => {
  try {
    await axios.delete(`${API}/products/${id}`);
  } catch (error) {
    console.error("Error al eliminar el producto con id", id);
    throw error;
  }
};
export const updateProduct = async (id, product) => {};
