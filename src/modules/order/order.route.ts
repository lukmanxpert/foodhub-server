import { Router } from "express";
import { requireRole } from "../../middlewares/requireRole";
import { asyncHandler } from "../../helpers/asyncHandler";
import { orderController } from "./order.controller";

const router = Router();

router.get(
  "/me",
  requireRole("CUSTOMER"),
  asyncHandler(orderController.getMyOrders),
);

export const orderRouter: Router = router;
