import { API } from "@/constants/API";
import axios from "axios";

export const fillAddCategories = async () => {
  try {
    const { data } = await axios.get(`${API}/categories`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
