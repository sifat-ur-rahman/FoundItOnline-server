"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidationSchemas = void 0;
const zod_1 = require("zod");
const userProfileSchema = zod_1.z.object({
    bio: zod_1.z.string(),
    age: zod_1.z.number(),
});
const userSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, { message: "Name is required." }),
        email: zod_1.z.string().email({ message: "Email address is required." }),
        password: zod_1.z
            .string()
            .min(6, { message: "Password must be at least 6 characters long." }),
        profile: userProfileSchema,
    }),
});
const userProfileUpdateSchema = zod_1.z.object({
    body: zod_1.z.object({
        bio: zod_1.z.string().optional(),
        age: zod_1.z.number().optional(),
    }),
});
exports.userValidationSchemas = {
    userSchema,
    userProfileUpdateSchema,
};
