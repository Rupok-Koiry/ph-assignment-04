import * as factory from '../../utils/handlerFactory';
import Product from './product.model';

export const createProduct = factory.createOne(Product);
export const getProduct = factory.getOne(Product, 'category');
export const getAllProducts = factory.getAll(Product, 'category');
export const updateProduct = factory.updateOne(Product);
export const deleteProduct = factory.deleteOne(Product);
