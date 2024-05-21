"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimValidationSchemas = void 0;
const zod_1 = require("zod");
const ClaimSchema = zod_1.z.object({
    body: zod_1.z.object({
        foundItemId: zod_1.z.string({ required_error: "CategoryId is required!" }),
        distinguishingFeatures: zod_1.z
            .string()
            .min(1, { message: "Distinguishing features must not be empty." }),
        lostDate: zod_1.z.string(),
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
