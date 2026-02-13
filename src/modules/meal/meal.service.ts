import { prisma } from "../../lib/prisma";

const getAllMeals = async () => {
  return await prisma.meal.findMany();
};

const getSingleMeal = async (mealId: string) => {
  return await prisma.meal.findUnique({
    where: {
      id: mealId,
    },
  });
};

export const mealService = { getAllMeals, getSingleMeal };
