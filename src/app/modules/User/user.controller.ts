import { Request, Response } from "express";
import { userService } from "./user.sevice";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";

const createUser = async (req: Request, res: Response) => {
  try {
    //console.log(req.body);
    const result = await userService.createUserIntoBD(req.body);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "User registered successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err?.name || "Something went wrong",
      error: err,
    });
  }
};

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
export const userController = {
  createUser,
  getMyProfile,
  updateMyProfile,
  getAllUsers,
};
