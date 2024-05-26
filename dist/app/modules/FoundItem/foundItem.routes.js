"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const foundItem_controller_1 = require("./foundItem.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const foundItem_validations_1 = require("./foundItem.validations");
const router = express_1.default.Router();
router.post("/found-items", (0, validateRequest_1.default)(foundItem_validations_1.FoundItemValidationSchemas.FoundItemSchema), (0, auth_1.default)(), foundItem_controller_1.FoundItemsController.createReport);
router.get("/found-items", foundItem_controller_1.FoundItemsController.getFoundItems);
router.get("/found-items/:userId", foundItem_controller_1.FoundItemsController.getFoundItemsByUser);
exports.ReportRoutes = router;
