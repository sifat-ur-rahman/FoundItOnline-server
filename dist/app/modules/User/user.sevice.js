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
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const jwtHelpers_1 = require("../../../helpars/jwtHelpers");
const config_1 = __importDefault(require("../../../config"));
const createUserIntoBD = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, username, password } = data;
    const existingUserEmail = yield prisma_1.default.user.findUnique({
        where: { email },
    });
    if (existingUserEmail) {
        throw new ApiError_1.default(404, "Email already in use.");
    }
    const existingUserName = yield prisma_1.default.user.findUnique({
        where: { username },
    });
    if (existingUserName) {
        throw new ApiError_1.default(404, "Username already in use.");
    }
    // Hash password
    const hashedPassword = yield bcrypt.hash(password, 10);
    const userData = yield prisma_1.default.user.create({
        data: {
            username,
            email,
            password: hashedPassword,
            name,
        },
    });
    // Omit the password in the response
    const accessToken = jwtHelpers_1.jwtHelpers.generateToken({
        email: userData.email,
        role: userData.role,
        userId: userData.id,
        userName: userData.name,
    }, config_1.default.jwt.jwt_secret, config_1.default.jwt.expires_in);
    const { password: _ } = userData, user = __rest(userData, ["password"]);
    const responsesData = {
        id: user.id,
        name: user.name,
        username: user.username,
        role: userData.role,
        email: user.email,
        accessToken,
    };
    return responsesData;
});
const getProfileFromDB = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const userProfileData = yield prisma_1.default.user.findUniqueOrThrow({
        where: {
            id: user.userId,
        },
    });
    const { password: _ } = userProfileData, userData = __rest(userProfileData, ["password"]);
    return userData;
});
const getAllUsersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma_1.default.user.findMany({
        select: {
            id: true,
            username: true,
            name: true,
            email: true,
            status: true,
        },
    });
    return users;
});
const UpdateProfileFromDB = (user, params) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, username, status } = params;
    const updatedProfile = yield prisma_1.default.user.update({
        where: {
            id: user.userId,
        },
        data: {
            name,
            email,
            username,
            status,
        },
    });
    return updatedProfile;
});
const UpdateStatusFromDB = (userId, status) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedProfile = yield prisma_1.default.user.update({
        where: {
            id: userId,
        },
        data: {
            status,
        },
    });
    return updatedProfile;
});
exports.userService = {
    createUserIntoBD,
    getProfileFromDB,
    UpdateProfileFromDB,
    getAllUsersFromDB,
    UpdateStatusFromDB,
};
//end
