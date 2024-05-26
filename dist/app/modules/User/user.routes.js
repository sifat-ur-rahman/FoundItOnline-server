"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_validations_1 = require("./user.validations");
const router = express_1.default.Router();
router.post("/register", (0, validateRequest_1.default)(user_validations_1.userValidationSchemas.userSchema), user_controller_1.userController.createUser);
router.get("/my-profile", (0, auth_1.default)(), user_controller_1.userController.getMyProfile);
router.get("/all-users", user_controller_1.userController.getAllUsers);
router.put("/my-profile", (0, validateRequest_1.default)(user_validations_1.userValidationSchemas.userProfileUpdateSchema), (0, auth_1.default)(), user_controller_1.userController.updateMyProfile);
router.put("/user/:userId/status", (0, validateRequest_1.default)(user_validations_1.userValidationSchemas.userStatusUpdateSchema), (0, auth_1.default)(), user_controller_1.userController.updateStatus);
exports.userRoutes = router;
