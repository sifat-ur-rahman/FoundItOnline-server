import { z } from "zod";

const FoundItemSchema = z.object({
  body: z.object({
    categoryId: z.string({ required_error: "CategoryId is required!" }),
    foundItemName: z
      .string()
      .min(1, { message: "FoundItemName must not be empty." }),
    description: z
      .string()
      .min(1, { message: "Description must not be empty." }),
    location: z.string().min(1, { message: "Location must not be empty." }),
  }),
});

export const FoundItemValidationSchemas = {
  FoundItemSchema,
};
