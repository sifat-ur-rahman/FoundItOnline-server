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
exports.LostItemService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createLostItemIntoBD = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, category, description, dateLost, locationLost, contactPhone, contactEmail, images, } = data;
    // Create the LostItem
    const LostItem = yield prisma_1.default.lostItem.create({
        data: {
            userId,
            category,
            description,
            dateLost,
            locationLost,
            contactPhone,
            contactEmail,
            images,
        },
    });
    return LostItem;
});
const getLostItemsFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm, page = 1, limit = 10, sortBy, sortOrder, category, } = query;
    // Prepare filters
    let where = {};
    if (searchTerm) {
        where = {
            OR: [
                {
                    locationFound: {
                        contains: searchTerm,
                        mode: "insensitive",
                    },
                },
                {
                    description: { contains: searchTerm, mode: "insensitive" },
                },
            ],
        };
    }
    if (category) {
        where.category = {
            contains: category,
            mode: "insensitive",
        };
    }
    // Prepare sorting
    const orderBy = sortBy
        ? { [sortBy]: sortOrder || "asc" }
        : undefined;
    // Retrieve paginated and filtered found items
    const lostItems = yield prisma_1.default.lostItem.findMany({
        where,
        orderBy,
        take: Number(limit),
        skip: (Number(page) - 1) * Number(limit),
    });
    const total = yield prisma_1.default.lostItem.count({ where });
    const responseData = {
        meta: {
            total,
            page: Number(page),
            limit: Number(limit),
        },
        data: lostItems,
    };
    return responseData;
});
const getLostItemsByUserIdFromDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const lostItems = yield prisma_1.default.lostItem.findMany({
        where: {
            userId: userId,
        },
    });
    return lostItems;
});
exports.LostItemService = {
    createLostItemIntoBD,
    getLostItemsFromDB,
    getLostItemsByUserIdFromDB,
};
