"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LostItemValidationSchemas = void 0;
const zod_1 = require("zod");
const LostItemSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string(),
        category: zod_1.z.string(),
        description: zod_1.z.string(),
        dateLost: zod_1.z.string(),
        locationLost: zod_1.z.string().optional(),
        contactPhone: zod_1.z.string(),
        contactEmail: zod_1.z.string().email(),
        images: zod_1.z.string(),
        status: zod_1.z.enum(["PENDING", "FOUND", "RETURNED"]).optional(),
    }),
});
exports.LostItemValidationSchemas = {
    LostItemSchema,
};
