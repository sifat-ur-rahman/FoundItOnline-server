import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { AuthServices } from "./auth.service";
import sendResponse from "../../../shared/sendResponse";

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthServices.loginUser(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User logged in successfully",
    data: result,
  });
});
const changePassword = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthServices.changePassword(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Password changed successfully!",
    data: result,
  });
});

export const AuthController = {
  loginUser,
  changePassword,
};
