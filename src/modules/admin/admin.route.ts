import { Router } from "express";
import { requireRole } from "../../middlewares/requireRole";
import { adminController } from "./admin.controller";

const router = Router();

router.get("/users", requireRole("ADMIN"), adminController.getAllUsers);
router.get("/providers", requireRole("ADMIN"), adminController.getAllProviders);
router.patch("/user/:userId", requireRole("ADMIN"), adminController.updateUserAdmin);

export const adminRouter: Router = router;
