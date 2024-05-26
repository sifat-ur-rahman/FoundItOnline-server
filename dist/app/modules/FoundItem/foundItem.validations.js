"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoundItemValidationSchemas = void 0;
const zod_1 = require("zod");
const FoundItemSchema = zod_1.z.object({
    body: zod_1.z.object({
        category: zod_1.z.string({ required_error: "Category is required!" }),
        userId: zod_1.z.string({ required_error: "userId is required!" }),
        contactPhone: zod_1.z.string({ required_error: "contactPhone is required!" }),
        contactEmail: zod_1.z.string({ required_error: "contactEmail is required!" }),
        images: zod_1.z.string({ required_error: "images is required!" }),
        dateFound: zod_1.z.string().min(1, { message: "Found data must not be empty." }),
        description: zod_1.z
            .string()
            .min(1, { message: "Description must not be empty." }),
        locationFound: zod_1.z
            .string()
            .min(1, { message: "Location must not be empty." }),
        status: zod_1.z.enum(["AVAILABLE", "CLAIMED", "RETURNED"]),
    }),
});
exports.FoundItemValidationSchemas = {
    FoundItemSchema,
};
