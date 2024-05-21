import { z } from "zod";

const LostItemSchema = z.object({
  body: z.object({
    userId: z.string(),
    category: z.string(),
    description: z.string(),
    dateLost: z.string(),
    locationLost: z.string().optional(),
    contactPhone: z.string(),
    contactEmail: z.string().email(),
    images: z.string(),
    status: z.enum(["PENDING", "FOUND", "RETURNED"]).optional(),
  }),
});

export const LostItemValidationSchemas = {
  LostItemSchema,
};
