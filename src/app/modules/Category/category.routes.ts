import express from "express";
import { CategoryController } from "./category.controller";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { CategoryValidationSchemas } from "./category.validation";

const router = express.Router();

router.post(
  "/found-item-categories",
  validateRequest(CategoryValidationSchemas.CategorySchema),
  auth(),
  CategoryController.createCategory
);

export const CategoryRoutes = router;
