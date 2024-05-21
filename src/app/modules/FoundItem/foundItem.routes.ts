import express from "express";

import auth from "../../middlewares/auth";
import { FoundItemsController } from "./foundItem.controller";
import validateRequest from "../../middlewares/validateRequest";
import { FoundItemValidationSchemas } from "./foundItem.validations";

const router = express.Router();

router.post(
  "/found-items",
  validateRequest(FoundItemValidationSchemas.FoundItemSchema),
  auth(),
  FoundItemsController.createReport
);
router.get("/found-items", FoundItemsController.getFoundItems);

export const ReportRoutes = router;
