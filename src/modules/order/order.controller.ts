import { Request, Response } from "express";
import { orderService } from "./order.service";

const getMyOrders = async (req: Request, res: Response) => {
  const data = await orderService.getMyOrders(req.user?.id as string);
  return res.status(200).json({
    message: "Retrieve all my orders.",
    data,
    success: true,
    error: true,
  });
};

export const orderController = { getMyOrders };
