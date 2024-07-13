import axios from "axios";
export interface IOrder {
  user: {
    name: string;
    email: string;
    phone: string;
    deliveryAddress: string;
  };
  products: {
    product: string;
    quantity: number;
  }[];
  totalAmount: number;
}

export async function createOrder(newOrder: IOrder) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/orders`,
      newOrder
    );
    const order = response.data.data;
    return order;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create order");
  }
}
