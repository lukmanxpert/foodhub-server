import { Router, Request, Response } from "express";
import { asyncHandler } from "../../helpers/asyncHandler";
import { authController } from "./auth.controller";
import { requireRole } from "../../middlewares/requireRole";

const router = Router();

router.get("/me", asyncHandler(authController.getCurrentUser));
router.patch(
  "/me/update",
  requireRole("CUSTOMER", "PROVIDER", "ADMIN"),
  asyncHandler(authController.updateUserProfile),
);

export const authRouter: Router = router;
