import { NextFunction, Request, Response } from "express";

import { ZodError } from "zod";
import handleZodError from "../errors/handleZodError";
import ApiError from "../errors/ApiError";

// const globalErrorHandler = (
//   err: any,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
//     success: false,
//     message: err.message || "Something went wrong!",
//     errorDetails: err,
//   });
// };
const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = error.statusCode || 500;
  let message = error.message || "Something went wrong!";
  let errorDetails = error;

  if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorDetails = simplifiedError?.errorDetails;
  }

  //ultimate return
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
    errorDetails,
  });
};
export default globalErrorHandler;
