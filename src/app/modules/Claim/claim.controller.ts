import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ClaimService } from "./claim.service";

const createClaim = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const user = req.user;

    const result = await ClaimService.createClaimIntoBD(user, req.body);
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Claim created successfully",
      data: result,
    });
  }
);

const getClaimByUserId = catchAsync(
  async (req: Request & { user?: any }, res: Response) => {
    const user = req.user;

    const result = await ClaimService.getClaimByUserFromDB(user);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Claims retrieved successfully",
      data: result,
    });
  }
);

const updateClaimById = catchAsync(async (req: Request, res: Response) => {
  const { claimId } = req.params;

  const result = await ClaimService.UpdateClaimByIdFromDB(claimId, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Claim updated successfully",
    data: result,
  });
});
export const ClaimController = {
  createClaim,
  getClaimByUserId,
  updateClaimById,
};
