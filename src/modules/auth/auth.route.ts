import { Router, Request, Response } from "express";
import { asyncHandler } from "../../helpers/asyncHandler";
import { authController } from "./auth.controller";

const router = Router();

router.get("/me", asyncHandler(authController.getCurrentUser));

export const authRouter: Router = router;
