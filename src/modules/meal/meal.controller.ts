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

export const mealController = { getAllMeals };
