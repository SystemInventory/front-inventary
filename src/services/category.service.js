import { API } from "@/constants/API";
import axios from "axios";

export const fillAllCategories = async () => {
  try {
    const { data } = await axios.get(`${API}/categories`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const createCategory = async(category) =>{
  try {
    const {data} = await axios.post(`${API}/categories`,category)
    console.log(data)
    return data;
  } catch (error) {
    console.error("Error al crear una nueva categoria",error)
    throw error;
    
  }
}
export const removeCategory = async (id)=>{
  try {
    await axios.delete(`${API}/categories/${id}`)
  } catch (error) {
    console.error("Error al eliminar una nueva categoria")
    throw error;
  }
}
export const updateCategory = async (id,category)=>{
  try {
    const {data} = await axios.put(`${API}/categories/${id}`,category)
    console.log(data)
    return data;
  } catch (error) {
    console.error("Error al actualizar la categoria ",category)
    throw error;
  }
}