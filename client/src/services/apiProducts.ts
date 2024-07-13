import axios from "axios";

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  stock: number;
  description: string;
  category: {
    _id: string;
    name: string;
  };
  ratings: number;
  images: string[];
}
interface INewProduct {
  name: string;
  price: number;
  stock: number;
  description: string;
  category: string;
  ratings: number;
  images: string[];
}
export async function getProducts() {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/products`
    );
    const products = response.data.data;
    return products;
  } catch (error) {
    console.error(error);
    throw new Error("Products could not be loaded");
  }
}
export async function getProduct(productId: string) {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/${productId}`
    );
    const product = response.data.data;
    return product;
  } catch (error) {
    console.error(error);
    throw new Error("Product could not be loaded");
  }
}

export async function createProduct(newProduct: INewProduct) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/products`,
      newProduct
    );
    const product = response.data.data;
    return product;
  } catch (error) {
    throw new Error("Failed to create product");
  }
}

export async function editProduct({
  newProduct,
  productId,
}: {
  newProduct: INewProduct;
  productId: string;
}) {
  try {
    const response = await axios.patch(
      `${import.meta.env.VITE_API_URL}/products/${productId}`,
      newProduct
    );
    const product = response.data.data;
    return product;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update product");
  }
}

export async function deleteProduct(productId: string) {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_API_URL}/products/${productId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Product could not be deleted");
  }
}
