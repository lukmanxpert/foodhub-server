import { Request, Response } from "express";
import { adminService } from "./admin.service";

const getAllUsers = async (req: Request, res: Response) => {
  const data = await adminService.getAllUsers();
  return res.status(200).json({
    message: "Retrieve all users data.",
    totalUsers: data.length,
    data,
    success: true,
    error: false,
  });
};

const getAllProviders = async (req: Request, res: Response) => {
  const data = await adminService.getAllProviders();
  return res.status(200).json({
    message: "Retrieve all provider's data.",
    totalProviders: data.length,
    data,
    success: true,
    error: false,
  });
};

const updateUserAdmin = async (req: Request, res: Response) => {
  const { userId } = req.params;
  if (!userId) {
    return res.status(404).json({
      message: "User not found.",
      error: true,
      success: false,
    });
  }
  const status = req.body.status;
  const data = await adminService.updateUserAdmin(userId as string, status);
  return res.status(200).json({
    message: "User updated success.",
    error: false,
    success: true,
    data,
  });
};

export const adminController = {
  getAllUsers,
  getAllProviders,
  updateUserAdmin,
};
