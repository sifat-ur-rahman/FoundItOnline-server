import { z } from "zod";

const userSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: "Name is required." }),
    username: z.string().min(1, { message: "User Name is required." }),
    email: z.string().email({ message: "Email address is required." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." }),
  }),
});

const userProfileUpdateSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    username: z.string().optional(),
    email: z.string().optional(),
  }),
});
const userStatusUpdateSchema = z.object({
  body: z.object({
    status: z.string().optional(),
  }),
});

export const userValidationSchemas = {
  userSchema,
  userProfileUpdateSchema,
  userStatusUpdateSchema,
};
