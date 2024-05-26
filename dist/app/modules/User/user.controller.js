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
exports.userController = void 0;
const user_sevice_1 = require("./user.sevice");
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const createUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log(req.body);
    const result = yield user_sevice_1.userService.createUserIntoBD(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "User logged in successfully",
        data: result,
    });
}));
const getMyProfile = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const result = yield user_sevice_1.userService.getProfileFromDB(user);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Profile retrieved successfully",
        data: result,
    });
}));
const getAllUsers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_sevice_1.userService.getAllUsersFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "All user retrieved successfully",
        data: result,
    });
}));
const updateMyProfile = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const result = yield user_sevice_1.userService.UpdateProfileFromDB(user, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "User profile updated successfully",
        data: result,
    });
}));
const updateStatus = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const { status } = req.body;
    const result = yield user_sevice_1.userService.UpdateStatusFromDB(userId, status);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "User status updated successfully",
        data: result,
    });
}));
exports.userController = {
    createUser,
    getMyProfile,
    updateMyProfile,
    getAllUsers,
    updateStatus,
};
