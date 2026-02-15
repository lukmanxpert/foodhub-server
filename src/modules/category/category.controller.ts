import { Request, Response } from "express";
import { categoryService } from "./category.service";

export interface categoryPayload {
  name: string;
  image: string;
  isFeatured: boolean;
  slug: string;
  createdBy: string;
}

const createCategory = async (req: Request, res: Response) => {
  const { name, image, isFeatured, slug } = req.body;
  if (!name || !image || !isFeatured || !slug) {
    return res.status(401).json({
      message: "Provide required fields",
      error: true,
      success: false,
    });
  }
  const payload: categoryPayload = {
    name,
    image,
    isFeatured,
    slug,
    createdBy: req.user?.id as string,
  };
  const data = await categoryService.createCategory(payload);
  return res.status(200).json({
    message: "Category created.",
    error: false,
    success: true,
  });
};

const getCategory = async (req: Request, res: Response) => {
  const { isFeatured } = req.params;
  const data = await categoryService.getCategory();
  return res.status(200).json({
    message: "Retrieve category data",
    data,
    error: false,
    success: true,
  });
};

export const categoryController = { createCategory, getCategory };
