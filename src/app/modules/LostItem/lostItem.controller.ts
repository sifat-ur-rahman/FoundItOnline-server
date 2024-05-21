import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { LostItemService } from "./lostItem.service";

const createLostItem = catchAsync(async (req: Request, res: Response) => {
  const result = await LostItemService.createLostItemIntoBD(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Lost Item created successfully",
    data: result,
  });
});

const getLostItems = catchAsync(async (req: Request, res: Response) => {
  const result = await LostItemService.getLostItemsFromDB(req.query);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Lost items retrieved successfully",
    data: result,
  });
});

const getLostItemsByUser = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;

  const result = await LostItemService.getLostItemsByUserIdFromDB(userId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Get Lost Items By UserId successfully",
    data: result,
  });
});
export const LostItemController = {
  createLostItem,
  getLostItems,
  getLostItemsByUser,
};
