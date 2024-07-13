import { z } from 'zod';

export const createOrderValidationSchema = z.object({
  body: z.object({
    user: z.object({
      name: z.string(),
      email: z.string().email({ message: 'Invalid email address' }),
      phone: z.string(),
      deliveryAddress: z.string(),
    }),
    products: z
      .array(
        z.object({
          product: z.string(),
          quantity: z
            .number()
            .int()
            .positive({ message: 'Quantity must be a positive integer' }),
        }),
      )
      .nonempty({ message: 'At least one product is required' }),
    totalAmount: z
      .number()
      .positive({ message: 'Total amount must be a positive number' }),
    status: z.enum(['pending', 'delivered', 'cancelled']).default('pending'),
  }),
});

export const updateOrderValidationSchema = z.object({
  body: z
    .object({
      user: z.object({
        name: z.string(),
        email: z.string().email({ message: 'Invalid email address' }),
        phone: z.string(),
        deliveryAddress: z.string(),
      }),
      products: z.array(
        z.object({
          product: z.string(),
          quantity: z
            .number()
            .int()
            .positive({ message: 'Quantity must be a positive integer' }),
        }),
      ),
      totalAmount: z
        .number()
        .positive({ message: 'Total amount must be a positive number' }),
      status: z.enum([
        'pending',
        'processed',
        'shipped',
        'delivered',
        'cancelled',
      ]),
    })
    .partial(),
});
