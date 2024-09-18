import axios from "axios";

const URL_API = `http://localhost:8080/api/suppliers`;

export const fillAllSuppliers = async () => {
  try {
    const { data } = await axios.get(`${URL_API}`);
    return data;
  } catch (error) {
    console.error("Error al traer los suppliers de la base de datos", error);
  }
};

export const fillAllById = async (id) => {
  try {
    const { data } = await axios.get(`${URL_API}/${id}`);
    return data;
  } catch (error) {
    console.error(`Error al traer supplier id : ${id} `, error);
  }
};
