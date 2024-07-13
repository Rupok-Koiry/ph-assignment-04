import { Schema } from 'mongoose';

export interface IOrder {
  user: {
    name: string;
    email: string;
    phone: string;
    deliveryAddress: string;
  };
  products: {
    product: Schema.Types.ObjectId;
    quantity: number;
  }[];
  totalAmount: number;
  status: string;
}
