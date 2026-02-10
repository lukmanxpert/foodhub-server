import { NextFunction, Request, Response } from "express";
import { Prisma } from "../../generated/prisma/client";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Prisma duplicate error
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      return res.status(400).json({
        message: "Duplicate value already exists",
      });
    }
  }

  // Default error
  res.status(500).json({
    message: err.message || "Something went wrong",
  });
};
