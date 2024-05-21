import { z } from "zod";

const ClaimSchema = z.object({
  body: z.object({
    itemId: z.string(),
    description: z.string().min(10),
    contactPhone: z.string().min(10).max(15).optional(),
    contactEmail: z.string().email().optional(),
    status: z.enum(["PENDING", "APPROVED", "REJECTED"]).optional(),
    userId: z.string(),
    lostItemId: z.string().nullable().optional(),
    foundItemId: z.string().nullable().optional(),
  }),
});
const ClaimUpdateSchema = z.object({
  body: z.object({
    status: z.string().optional(),
  }),
});

export const ClaimValidationSchemas = {
  ClaimSchema,
  ClaimUpdateSchema,
};
