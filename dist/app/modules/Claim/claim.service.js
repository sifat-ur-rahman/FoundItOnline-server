"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createClaimIntoBD = (user, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = user.userId;
    const { foundItemId, distinguishingFeatures, lostDate } = payload;
    // Create the found item
    const foundItems = yield prisma_1.default.claim.create({
        data: {
            userId,
            foundItemId,
            distinguishingFeatures,
            lostDate,
        },
    });
    return foundItems;
});
const getClaimByUserFromDB = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const claims = yield prisma_1.default.claim.findMany({
        where: {
            userId: user.userId,
        },
        include: {
            foundItem: {
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            createdAt: true,
                            updatedAt: true,
                        },
                    },
                    category: true,
                },
            },
        },
    });
    return claims;
});
const UpdateClaimByIdFromDB = (id, params) => __awaiter(void 0, void 0, void 0, function* () {
    const { status } = params;
    // Update the claim status
    const updatedClaim = yield prisma_1.default.claim.update({
        where: {
            id: id,
        },
        data: {
            status,
        },
    });
    return updatedClaim;
});
exports.ClaimService = {
    createClaimIntoBD,
    getClaimByUserFromDB,
    UpdateClaimByIdFromDB,
};
