import { API, baseURL } from "@/constants/API";
import axios from "axios";

export const fillAllSuppliers = async () => {
  try {
    const { data } = await axios.get(`${API+baseURL}`);
    return data;
  } catch (error) {
    console.error("Error al traer los suppliers de la base de datos", error);
  }
};

export const fillAllById = async (id) => {
  try {
    const { data } = await axios.get(`${API+ baseURL}/${id}`);
    return data;
  } catch (error) {
    console.error(`Error al traer supplier id : ${id} `, error);
  }
};
