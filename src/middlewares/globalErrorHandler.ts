import { NextFunction, Request, Response } from "express";
import { Prisma } from "../../generated/prisma/client";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log("errors :>> ", err);
  // Prisma duplicate error
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      return res.status(400).json({
        message: "Duplicate value already exists",
        error: true,
        success: false,
      });
    }
    if (err.code === "P2025") {
      return res.status(404).json({
        message: "You do not have this resources.",
        error: true,
        success: false,
      });
    }
  }

  // Default error
  res.status(500).json({
    message: err.message || "Something went wrong",
  });
};
