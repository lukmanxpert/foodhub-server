import { auth } from "../../lib/auth";
import { Request, Response } from "express";
import { authService, UpdateUserProfileData } from "./auth.service";

const getCurrentUser = async (req: Request, res: Response) => {
  const session = await auth.api.getSession({
    headers: req.headers,
  });
  if (!session?.user) {
    return res.status(401).json({
      message: "Unauthorized!",
      error: true,
      success: false,
    });
  }
  return res.status(201).json({
    message: "Retrieve user data.",
    data: session?.user,
    success: true,
    error: false,
  });
};

const updatePassword = async (req: Request, res: Response) => {
  const { newPassword, currentPassword, reset } = req.body;
  if (!newPassword || !currentPassword) {
    return res.status(400).json({
      message: "Provide required fields.",
      error: true,
      success: false,
    });
  }
  const data = await auth.api.changePassword({
    body: {
      currentPassword,
      newPassword,
      revokeOtherSessions: reset || false,
    },
    headers: req.headers,
  });
  res.status(200).json({
    message: "Password changed.",
    data: data.user,
    success: true,
    error: false,
  });
};

const updateUserProfile = async (req: Request, res: Response) => {
  const { name, avatar, phone }: UpdateUserProfileData = req.body;
  const payload: UpdateUserProfileData = { name, avatar, phone };
  const data = await authService.updateUserProfile(
    req.user?.id as string,
    payload,
  );
  return res.status(200).json({
    message: "Updated success.",
    data,
    success: true,
    error: false,
  });
};

export const authController = {
  getCurrentUser,
  updateUserProfile,
  updatePassword,
};
