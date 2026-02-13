import { prisma } from "../../lib/prisma";

const getAllMeals = async () => {
  return await prisma.meal.findMany();
};

export const mealService = { getAllMeals };
