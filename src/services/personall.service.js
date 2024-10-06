import { API } from "@/constants/API";
import axios from "axios";

export const fillAllPersonell = async () => {
  try {
    const { data } = await axios.get(`${API}/users`);
    console.log(data)
    return data;
  } catch (error) {
    console.log("Error al traer a los personales", error);
    throw error;
  }
};
export const createPersonell = async (personell) => {
  try {
    const { data } = await axios.put(`${API}/users/${personell}`);
    return data;
  } catch (error) {
    console.log("Error al crear un nuevo personal", error);
    throw error;
  }
};

export const removePersonell = async (id) => {
  try {
    await axios.delete(`${API}/users/${id}`)
  } catch (error) {
    console.log("Error al eliminar el usuario con id : " , id)
    throw error;
  }

}
export const updatePersonell = async (id,personell) =>{
     try {
        const {data} = await axios.put(`${API}/users/${id}`,personell)
        return data;
     } catch (error) {
        console.error("Error al actualizar al personal",personell)
        throw error;
     }
}