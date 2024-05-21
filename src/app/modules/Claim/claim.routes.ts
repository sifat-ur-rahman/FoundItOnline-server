import express from "express";

import auth from "../../middlewares/auth";
import { ClaimController } from "./claim.controller";
import validateRequest from "../../middlewares/validateRequest";
import { ClaimValidationSchemas } from "./claim.validation";

const router = express.Router();

router.post(
  "/claims",
  validateRequest(ClaimValidationSchemas.ClaimSchema),
  auth(),
  ClaimController.createClaim
);
router.get("/claims", auth(), ClaimController.getClaimByUserId);
router.put(
  "/claims/:claimId",
  validateRequest(ClaimValidationSchemas.ClaimUpdateSchema),
  auth(),
  ClaimController.updateClaimById
);

export const ClaimRoutes = router;
