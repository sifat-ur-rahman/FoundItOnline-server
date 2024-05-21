import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { FoundItemsService } from "./foundItem.service";

const createReport = catchAsync(async (req: Request, res: Response) => {
  const result = await FoundItemsService.createReportIntoBD(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Found item reported successfully",
    data: result,
  });
});

const getFoundItems = catchAsync(async (req: Request, res: Response) => {
  const result = await FoundItemsService.getFoundItemsFromDB(req.query);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Found items retrieved successfully",
    data: result,
  });
});

const getFoundItemsByUser = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;

  const result = await FoundItemsService.getFoundItemsByUserIdFromDB(userId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Get Found Items By UserId successfully",
    data: result,
  });
});
export const FoundItemsController = {
  createReport,
  getFoundItems,
  getFoundItemsByUser,
};
