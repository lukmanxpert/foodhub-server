import { auth } from "../../lib/auth";
import { Request, Response } from "express";
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

export const authController = { getCurrentUser };
