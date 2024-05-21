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
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //console.log(req.body);
        const result = yield user_sevice_1.userService.createUserIntoBD(req.body);
        res.status(201).json({
            success: true,
            statusCode: 201,
            message: "User registered successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.name) || "Something went wrong",
            error: err,
        });
    }
});
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
exports.userController = {
    createUser,
    getMyProfile,
    updateMyProfile,
};
