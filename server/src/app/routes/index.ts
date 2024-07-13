import { Router } from 'express';
import { ProductRoutes } from '../modules/product/product.routes';
import { CategoryRoutes } from '../modules/category/category.routes';
import { OrderRoutes } from '../modules/order/order.route';

const router = Router();

// Define the routes for each module
const moduleRoutes = [
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/orders',
    route: OrderRoutes,
  },
  {
    path: '/categories',
    route: CategoryRoutes,
  },
];

// Register each module route with the router
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
