import { Provider } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createProvider = async (data: any) => {
  const provider = await prisma.provider.create({
    data: data,
  });
  return provider;
};

export const providerService = { createProvider };
