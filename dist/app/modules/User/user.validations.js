"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidationSchemas = void 0;
const zod_1 = require("zod");
const userSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, { message: "Name is required." }),
        username: zod_1.z.string().min(1, { message: "User Name is required." }),
        email: zod_1.z.string().email({ message: "Email address is required." }),
        password: zod_1.z
            .string()
            .min(6, { message: "Password must be at least 6 characters long." }),
    }),
});
const userProfileUpdateSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        username: zod_1.z.string().optional(),
        email: zod_1.z.string().optional(),
    }),
});
const userStatusUpdateSchema = zod_1.z.object({
    body: zod_1.z.object({
        status: zod_1.z.string().optional(),
    }),
});
exports.userValidationSchemas = {
    userSchema,
    userProfileUpdateSchema,
    userStatusUpdateSchema,
};
