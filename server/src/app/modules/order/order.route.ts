import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getOrder,
  updateOrder,
} from './order.controller';
import {
  createOrderValidationSchema,
  updateOrderValidationSchema,
} from './order.validation';

const router = express.Router();

router
  .route('/')
  .get(getAllOrders)
  .post(validateRequest(createOrderValidationSchema), createOrder);

router
  .route('/:id')
  .get(getOrder)
  .patch(validateRequest(updateOrderValidationSchema), updateOrder)
  .delete(deleteOrder);

export const OrderRoutes = router;
