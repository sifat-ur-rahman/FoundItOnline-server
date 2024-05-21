import { z } from "zod";

const CategorySchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required!" }),
  }),
});

export const CategoryValidationSchemas = {
  CategorySchema,
};
