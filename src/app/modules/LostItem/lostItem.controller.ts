import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { LostItemService } from "./lostItem.service";

const createLostItem = catchAsync(async (req: Request, res: Response) => {
  const result = await LostItemService.createLostItemIntoBD(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Found item LostItem created successfully",
    data: result,
  });
});

export const LostItemController = {
  createLostItem,
};
