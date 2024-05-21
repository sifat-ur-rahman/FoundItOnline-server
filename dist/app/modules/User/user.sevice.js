"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const bcrypt = __importStar(require("bcrypt"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createUserIntoBD = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, profile } = data;
    // Hash password
    const hashedPassword = yield bcrypt.hash(password, 10);
    // Transactional approach to create user and profile
    const user = yield prisma_1.default.$transaction((prisma) => __awaiter(void 0, void 0, void 0, function* () {
        const newUser = yield prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                profile: {
                    create: {
                        bio: profile.bio,
                        age: profile.age,
                    },
                },
            },
            include: {
                profile: true,
            },
        });
        return newUser;
    }));
    // Omit the password in the response
    const { password: _ } = user, userData = __rest(user, ["password"]);
    return userData;
});
const getProfileFromDB = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const userProfileData = yield prisma_1.default.userProfile.findUnique({
        where: {
            userId: user.userId,
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
        },
    });
    return userProfileData;
});
const UpdateProfileFromDB = (user, params) => __awaiter(void 0, void 0, void 0, function* () {
    const { bio, age } = params;
    const updatedProfile = yield prisma_1.default.userProfile.update({
        where: {
            userId: user.userId,
        },
        data: {
            bio,
            age,
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
        },
    });
    return updatedProfile;
});
exports.userService = {
    createUserIntoBD,
    getProfileFromDB,
    UpdateProfileFromDB,
};
