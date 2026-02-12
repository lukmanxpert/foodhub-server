import { Router } from "express";
import { requireRole } from "../../middlewares/requireRole";
import { adminController } from "./admin.controller";

const router = Router();

router.get("/users", requireRole("ADMIN"), adminController.getAllUsers);

export const adminRouter: Router = router;
