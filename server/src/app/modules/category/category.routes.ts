import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategory,
  updateCategory,
} from './category.controller';
import {
  createCategoryValidationSchema,
  updateCategoryValidationSchema,
} from './category.validation';

const router = express.Router();

router
  .route('/')
  .get(getAllCategories)
  .post(validateRequest(createCategoryValidationSchema), createCategory);

router
  .route('/:id')
  .get(getCategory)
  .patch(validateRequest(updateCategoryValidationSchema), updateCategory)
  .delete(deleteCategory);

export const CategoryRoutes = router;
