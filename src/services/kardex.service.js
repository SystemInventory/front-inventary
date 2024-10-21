import { API } from "@/constants/API";
import axios from "axios";

export const fillAllKardex = async () => {
  try {
    const { data } = await axios.get(`${API}/kardex`);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createKardex = async (kardex) => {
  try {
    const { data } = await axios.post(`${API}/kardex`, kardex);
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error al crear un nuevo kardex", error);
    throw error;
  }
};

export const removeKardex = async (id) => {
  try {
    await axios.delete(`${API}/kardex/${id}`);
  } catch (error) {
    console.error("Error al eliminar un nuevo kardex");
    throw error;
  }
};
export const updateKardex = async (id, kardex) => {
  try {
    const { data } = await axios.put(`${API}/kardex/${id}`, kardex);
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error al actualizar el kardex ", kardex);
    throw error;
  }
};
