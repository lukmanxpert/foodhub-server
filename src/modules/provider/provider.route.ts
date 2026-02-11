import { Router } from "express";
import { requireRole } from "../../middlewares/requireRole";
import { asyncHandler } from "../../helpers/asyncHandler";
import { providerController } from "./provider.controller";

const router = Router();

router.post(
  "/create",
  requireRole("CUSTOMER"),
  asyncHandler(providerController.createProvider),
);
router.delete(
  "/delete",
  requireRole("PROVIDER"),
  asyncHandler(providerController.deleteProvider),
);

export const providerRouter: Router = router;
