"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimValidationSchemas = void 0;
const zod_1 = require("zod");
const ClaimSchema = zod_1.z.object({
    body: zod_1.z.object({
        itemId: zod_1.z.string(),
        description: zod_1.z.string(),
        contactPhone: zod_1.z.string().optional(),
        contactEmail: zod_1.z.string().email().optional(),
        status: zod_1.z.enum(["PENDING", "APPROVED", "REJECTED"]).optional(),
        userId: zod_1.z.string(),
        lostItemId: zod_1.z.string().nullable().optional(),
        foundItemId: zod_1.z.string().nullable().optional(),
    }),
});
const ClaimUpdateSchema = zod_1.z.object({
    body: zod_1.z.object({
        status: zod_1.z.string().optional(),
    }),
});
exports.ClaimValidationSchemas = {
    ClaimSchema,
    ClaimUpdateSchema,
};
