"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const claim_controller_1 = require("./claim.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const claim_validation_1 = require("./claim.validation");
const router = express_1.default.Router();
router.post("/claims", (0, validateRequest_1.default)(claim_validation_1.ClaimValidationSchemas.ClaimSchema), (0, auth_1.default)(), claim_controller_1.ClaimController.createClaim);
router.get("/claims", (0, auth_1.default)(), claim_controller_1.ClaimController.getClaimByUserId);
router.put("/claims/:claimId", (0, validateRequest_1.default)(claim_validation_1.ClaimValidationSchemas.ClaimUpdateSchema), (0, auth_1.default)(), claim_controller_1.ClaimController.updateClaimById);
exports.ClaimRoutes = router;
