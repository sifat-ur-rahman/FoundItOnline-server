import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { CategoryService } from "./category.sevice";

const createCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.createCategoryIntoBD(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Found item category created successfully",
    data: result,
  });
});

export const CategoryController = {
  createCategory,
};
