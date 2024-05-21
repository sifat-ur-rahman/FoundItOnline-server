import express from "express";
import { LostItemController } from "./lostItem.controller";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { LostItemValidationSchemas } from "./lostItem.validation";

const router = express.Router();

router.post(
  "/lost-item",
  validateRequest(LostItemValidationSchemas.LostItemSchema),
  auth(),
  LostItemController.createLostItem
);

export const LostItemRoutes = router;
