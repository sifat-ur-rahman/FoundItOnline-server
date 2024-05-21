import { z } from "zod";

const ClaimSchema = z.object({
  body: z.object({
    foundItemId: z.string({ required_error: "CategoryId is required!" }),
    distinguishingFeatures: z
      .string()
      .min(1, { message: "Distinguishing features must not be empty." }),
    lostDate: z.string(),
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
