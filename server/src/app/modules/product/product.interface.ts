import { Schema } from 'mongoose';

export interface IProduct {
  name: string;
  price: number;
  stock: number;
  description: string;
  category: Schema.Types.ObjectId;
  ratings: number;
  images: string[];
}
