import { API } from "@/constants/API"; 
import axios from "axios";

export const fillAllSuppliers = async () => {
  try {
    const { data } = await axios.get(`${API}/suppliers`);
    return data;
  } catch (error) {
    console.error("Error al traer los suppliers de la base de datos", error);
  }
};
export const createSupplier = async(supplier)=>{
  try {
    const {data} = await axios.post(`${API}/suppliers`,supplier);
    console.log(data)
  return data;
  } catch (error) {
    console.error("Error al crear proveedor",error)
    throw error;
  }
}
export const removeSupplier = async(id)=>{
  try {
    await axios.delete(`${API}/suppliers/${id}`)
  } catch (error) {
    console.log("Error al eliminar usuario",error)
    throw error;
  }
}
// export const fillAllById = async (id) => {
//   try {
//     const { data } = await axios.get(`${API+ baseURL}/${id}`);
//     return data;
//   } catch (error) {
//     console.error(`Error al traer supplier id : ${id} `, error);
//   }
// };
