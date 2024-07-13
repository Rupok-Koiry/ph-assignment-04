import axios from "axios";

export interface ICategory {
  _id: string;
  name: string;
  image: string;
}

export async function getCategories() {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/categories`
    );
    const categories = response.data.data;
    return categories;
  } catch (error) {
    console.error(error);
    throw new Error("Categories could not be loaded");
  }
}
