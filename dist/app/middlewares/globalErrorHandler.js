"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const handleZodError_1 = __importDefault(require("../errors/handleZodError"));
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
const globalErrorHandler = (error, req, res, next) => {
    let statusCode = error.statusCode || 500;
    let message = error.message || "Something went wrong!";
    let errorDetails = error;
    if (error instanceof zod_1.ZodError) {
        const simplifiedError = (0, handleZodError_1.default)(error);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.statusCode;
        message = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorDetails = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorDetails;
    }
    //ultimate return
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
        errorDetails,
    });
};
exports.default = globalErrorHandler;
