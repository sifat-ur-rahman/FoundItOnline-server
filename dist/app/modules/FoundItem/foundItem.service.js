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
exports.FoundItemsService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createReportIntoBD = (user, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = user.userId;
    const { categoryId, foundItemName, description, location } = payload;
    // Create the found item
    const foundItems = yield prisma_1.default.foundItem.create({
        data: {
            userId,
            categoryId,
            foundItemName,
            description,
            location,
        },
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
            category: {
                select: {
                    id: true,
                    name: true,
                    createdAt: true,
                    updatedAt: true,
                },
            },
        },
    });
    return foundItems;
});
const getFoundItemsFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm, page = 1, limit = 10, sortBy, sortOrder, foundItemName, } = query;
    // Prepare filters
    let where = {};
    if (searchTerm) {
        where = {
            OR: [
                {
                    foundItemName: {
                        contains: searchTerm,
                        mode: "insensitive",
                    },
                },
                { location: { contains: searchTerm, mode: "insensitive" } },
                {
                    description: { contains: searchTerm, mode: "insensitive" },
                },
            ],
        };
    }
    if (foundItemName) {
        where.foundItemName = {
            contains: foundItemName,
            mode: "insensitive",
        };
    }
    // Prepare sorting
    const orderBy = sortBy
        ? { [sortBy]: sortOrder || "asc" }
        : undefined;
    // Retrieve paginated and filtered found items
    const foundItems = yield prisma_1.default.foundItem.findMany({
        where,
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
        orderBy,
        take: Number(limit),
        skip: (Number(page) - 1) * Number(limit),
    });
    const total = yield prisma_1.default.foundItem.count({ where });
    const responseData = {
        meta: {
            total,
            page: Number(page),
            limit: Number(limit),
        },
        data: foundItems,
    };
    return responseData;
});
exports.FoundItemsService = {
    createReportIntoBD,
    getFoundItemsFromDB,
};
