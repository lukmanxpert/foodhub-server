import { Provider } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";
import { providerService } from "./provider.service";
import { Request, Response } from "express";

const createProvider = async (req: Request, res: Response) => {
  const { name, desc, address }: Provider = req.body;
  const data = {
    name,
    userId: req?.user?.id,
    desc,
    address,
  };
  const response = await providerService.createProvider(data);
  if (response) {
    await prisma.user.update({
      where: {
        id: req.user?.id as string,
      },
      data: {
        role: "PROVIDER",
      },
    });
  }
  return res.status(201).json({
    message: "Provider created success.",
    data: response,
    success: true,
    error: false,
  });
};
export const providerController = { createProvider };
