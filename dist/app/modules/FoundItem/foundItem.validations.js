"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoundItemValidationSchemas = void 0;
const zod_1 = require("zod");
const FoundItemSchema = zod_1.z.object({
    body: zod_1.z.object({
        categoryId: zod_1.z.string({ required_error: "CategoryId is required!" }),
        foundItemName: zod_1.z
            .string()
            .min(1, { message: "FoundItemName must not be empty." }),
        description: zod_1.z
            .string()
            .min(1, { message: "Description must not be empty." }),
        location: zod_1.z.string().min(1, { message: "Location must not be empty." }),
    }),
});
exports.FoundItemValidationSchemas = {
    FoundItemSchema,
};
