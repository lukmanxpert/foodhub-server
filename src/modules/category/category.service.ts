import { prisma } from "../../lib/prisma";
import { categoryPayload } from "./category.controller";

const createCategory = async (payload: categoryPayload) => {
  const data = await prisma.category.create({
    data: payload,
  });
  return data;
};

const getCategory = async (isFeatured?: boolean) => {
  const whereCondition = isFeatured !== undefined ? { isFeatured } : {};

  return prisma.category.findMany({
    where: whereCondition,
    omit: {
      createdBy: true,
    },
  });
};

export const categoryService = { createCategory, getCategory };
