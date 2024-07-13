import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from './product.controller';
import {
  createProductValidationSchema,
  updateProductValidationSchema,
} from './product.validation';

const router = express.Router();

router
  .route('/')
  .get(getAllProducts)
  .post(validateRequest(createProductValidationSchema), createProduct);

router
  .route('/:id')
  .get(getProduct)
  .patch(validateRequest(updateProductValidationSchema), updateProduct)
  .delete(deleteProduct);

export const ProductRoutes = router;
