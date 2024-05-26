"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidationSchemas = void 0;
const zod_1 = require("zod");
const AuthSchema = zod_1.z.object({
    body: zod_1.z.object({
        usernameOrEmail: zod_1.z.string({
            required_error: "username Or Email is required!",
        }),
        password: zod_1.z.string({ required_error: "Password is required!" }),
    }),
});
const changePasswordSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: "Email is required!",
        }),
        currentPassword: zod_1.z.string({
            required_error: "Current Password is required!",
        }),
        newPassword: zod_1.z.string({ required_error: "New Password is required!" }),
    }),
});
exports.AuthValidationSchemas = {
    AuthSchema,
    changePasswordSchema,
};
