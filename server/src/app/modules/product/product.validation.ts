import { z } from 'zod';

export const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    price: z.number().positive('Price must be a positive number'),
    stock: z.number().int().nonnegative('Stock must be a non-negative integer'),
    description: z.string(),
    category: z.string(),
    ratings: z.number().min(0).max(5, 'Ratings must be between 0 and 5'),
    images: z
      .array(z.string().url('Each image must be a valid URL'))
      .nonempty('At least one image is required'),
  }),
});

export const updateProductValidationSchema = z.object({
  body: z
    .object({
      name: z.string(),
      price: z.number().positive('Price must be a positive number'),
      stock: z
        .number()
        .int()
        .nonnegative('Stock must be a non-negative integer'),
      description: z.string(),
      category: z.string(),
      ratings: z.number().min(0).max(5, 'Ratings must be between 0 and 5'),
      images: z
        .array(z.string().url('Each image must be a valid URL'))
        .nonempty('At least one image is required'),
    })
    .partial(),
});
