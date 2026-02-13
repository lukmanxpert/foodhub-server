import { Router } from "express";
import { requireRole } from "../../middlewares/requireRole";
import { adminController } from "./admin.controller";
import { asyncHandler } from "../../helpers/asyncHandler";

const router = Router();

router.get(
  "/users",
  requireRole("ADMIN"),
  asyncHandler(adminController.getAllUsers),
);
router.get(
  "/providers",
  requireRole("ADMIN"),
  asyncHandler(adminController.getAllProviders),
);
router.get(
  "/orders",
  requireRole("ADMIN"),
  asyncHandler(adminController.getAllOrders),
);
router.patch(
  "/user/:userId",
  requireRole("ADMIN"),
  asyncHandler(adminController.updateUserAdmin),
);

export const adminRouter: Router = router;
