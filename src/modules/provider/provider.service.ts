import { Provider } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createProvider = async (data: any) => {
  const provider = await prisma.provider.create({
    data: data,
  });
  return provider;
};

const deleteProvider = async (userId: string) => {
  const result = await prisma.provider.delete({
    where: {
      userId: userId,
    },
  });
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      role: "CUSTOMER",
    },
  });
  return result;
};

export const providerService = { createProvider, deleteProvider };
