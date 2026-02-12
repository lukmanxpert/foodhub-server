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

export const adminController = { getAllUsers };
