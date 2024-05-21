import { z } from "zod";

const FoundItemSchema = z.object({
  body: z.object({
    category: z.string({ required_error: "Category is required!" }),
    userId: z.string({ required_error: "userId is required!" }),
    contactPhone: z.string({ required_error: "contactPhone is required!" }),
    contactEmail: z.string({ required_error: "contactEmail is required!" }),
    images: z.string({ required_error: "images is required!" }),
    dateFound: z.string().min(1, { message: "Found data must not be empty." }),
    description: z
      .string()
      .min(1, { message: "Description must not be empty." }),
    locationFound: z
      .string()
      .min(1, { message: "Location must not be empty." }),
    status: z.enum(["AVAILABLE", "CLAIMED", "RETURNED"]),
  }),
});

export const FoundItemValidationSchemas = {
  FoundItemSchema,
};
