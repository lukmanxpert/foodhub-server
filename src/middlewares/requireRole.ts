import { NextFunction, Request, Response } from "express";
import { Roles } from "../../generated/prisma/enums";
import { auth } from "../lib/auth";

export const requireRole = (...roles: Roles[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const session = await auth.api.getSession({
      headers: req.headers,
    });
    if (!session) {
      return res.status(401).json({
        message: "Login to access this resources!",
        error: true,
        success: false,
      });
    }
    if (!roles.includes(session.user.role as Roles)) {
      return res.status(403).json({
        message: "Forbidden access!",
        error: true,
        success: false,
      });
    }
    req.user = session.user;
    next();
  };
};
