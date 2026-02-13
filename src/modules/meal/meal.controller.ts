import { Request, Response } from "express";
import { mealService } from "./meal.service";

const getAllMeals = async (req: Request, res: Response) => {
  const data = await mealService.getAllMeals();
  return res.status(200).json({
    message: "Retrieve all meal data.",
    data,
    error: false,
    success: true,
  });
};

const getSingleMeal = async (req: Request, res: Response) => {
  const { mealId } = req.params;
  if (!mealId) {
    return res.status(400).json({
      message: "Provide meal ID.",
      error: true,
      success: false,
    });
  }
  const data = await mealService.getSingleMeal(mealId as string);
  return res.status(200).json({
    message: "Retrieve meal data.",
    data,
    error: false,
    success: true,
  });
};

export const mealController = { getAllMeals, getSingleMeal };
