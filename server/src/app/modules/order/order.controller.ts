import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import * as factory from '../../utils/handlerFactory';
import Order from './order.model';
import Product from '../product/product.model';

export const createOrder = catchAsync(async (req, res) => {
  const doc = await Order.create(req.body);

  // Extract product IDs and quantities from the request body
  const productUpdates = req.body.products.map(
    (item: { product: string; quantity: number }) => {
      return {
        updateOne: {
          filter: { _id: item.product },
          update: { $inc: { stock: -item.quantity } },
        },
      };
    },
  );

  await Product.bulkWrite(productUpdates);

  res.status(httpStatus.CREATED).json({
    success: true,
    statusCode: httpStatus.CREATED,
    message: `Order created successfully`,
    data: doc,
  });
});

export const getOrder = factory.getOne(Order);
export const getAllOrders = factory.getAll(Order);
export const updateOrder = factory.updateOne(Order);
export const deleteOrder = factory.deleteOne(Order);
