import express, { Request, Response } from "express";
import { userController } from "./user.controller";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { userValidationSchemas } from "./user.validations";

const router = express.Router();

router.post(
  "/register",
  validateRequest(userValidationSchemas.userSchema),
  userController.createUser
);

router.get("/my-profile", auth(), userController.getMyProfile);

router.put(
  "/my-profile",
  validateRequest(userValidationSchemas.userProfileUpdateSchema),
  auth(),
  userController.updateMyProfile
);

export const userRoutes = router;
