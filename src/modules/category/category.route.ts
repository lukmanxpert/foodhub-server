import { Router } from "express";
import { requireRole } from "../../middlewares/requireRole";
import { asyncHandler } from "../../helpers/asyncHandler";
import { categoryController } from "./category.controller";

const router = Router();

router.post(
  "/create",
  requireRole("ADMIN"),
  asyncHandler(categoryController.createCategory),
);
router.get("/:isFeatured", asyncHandler(categoryController.getCategory));

export const categoryRouter: Router = router;
