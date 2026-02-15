import { prisma } from "../../lib/prisma";
import { categoryPayload } from "./category.controller";

const createCategory = async (payload: categoryPayload) => {
  const data = await prisma.category.create({
    data: payload,
  });
  return data;
};

export const categoryService = { createCategory };
