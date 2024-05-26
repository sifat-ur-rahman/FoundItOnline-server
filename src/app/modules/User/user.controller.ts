import { Request, Response } from "express";
import { userService } from "./user.sevice";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";

const createUser = catchAsync(async (req: Request, res: Response) => {
  //console.log(req.body);
  const result = await userService.createUserIntoBD(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User logged in successfully",
    data: result,
  });
});

const getMyProfile = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const user = req.user;

    const result = await userService.getProfileFromDB(user);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Profile retrieved successfully",
      data: result,
    });
  }
);
const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.getAllUsersFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "All user retrieved successfully",
    data: result,
  });
});
const updateMyProfile = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const user = req.user;

    const result = await userService.UpdateProfileFromDB(user, req.body);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "User profile updated successfully",
      data: result,
    });
  }
);
const updateStatus = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { status } = req.body;

  const result = await userService.UpdateStatusFromDB(userId, status);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User status updated successfully",
    data: result,
  });
});
export const userController = {
  createUser,
  getMyProfile,
  updateMyProfile,
  getAllUsers,
  updateStatus,
};
