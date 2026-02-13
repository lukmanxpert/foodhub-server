import { Router } from "express";
import { mealController } from "./meal.controller";
import { asyncHandler } from "../../helpers/asyncHandler";

const router = Router();

router.get("/", asyncHandler(mealController.getAllMeals));

export const mealRouter: Router = router;
