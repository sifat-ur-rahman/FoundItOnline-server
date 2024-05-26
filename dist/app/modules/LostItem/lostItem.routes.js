"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LostItemRoutes = void 0;
const express_1 = __importDefault(require("express"));
const lostItem_controller_1 = require("./lostItem.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const lostItem_validation_1 = require("./lostItem.validation");
const router = express_1.default.Router();
router.post("/lost-item", (0, validateRequest_1.default)(lostItem_validation_1.LostItemValidationSchemas.LostItemSchema), (0, auth_1.default)(), lostItem_controller_1.LostItemController.createLostItem);
router.get("/lost-items", lostItem_controller_1.LostItemController.getLostItems);
router.get("/lost-items/:userId", lostItem_controller_1.LostItemController.getLostItemsByUser);
exports.LostItemRoutes = router;
