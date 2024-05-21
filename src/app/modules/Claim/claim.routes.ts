import express from "express";

import auth from "../../middlewares/auth";
import { ClaimController } from "./claim.controller";
import validateRequest from "../../middlewares/validateRequest";
import { ClaimValidationSchemas } from "./claim.validation";

const router = express.Router();

router.post(
  "/claim",
  validateRequest(ClaimValidationSchemas.ClaimSchema),
  auth(),
  ClaimController.createClaim
);
router.get("/claims", auth(), ClaimController.getClaims);

router.get("/claims/:claimId", auth(), ClaimController.getClaimByUserId);

router.put(
  "/claim/:claimId",
  validateRequest(ClaimValidationSchemas.ClaimUpdateSchema),
  auth(),
  ClaimController.updateClaimById
);

export const ClaimRoutes = router;
