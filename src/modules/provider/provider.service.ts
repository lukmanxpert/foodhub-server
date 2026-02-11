import { prisma } from "../../lib/prisma";

export interface UpdateProviderPayload {
  name?: string;
  desc?: string;
  address?: string;
  isOpen?: boolean;
}

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

const updateProvider = async (
  userId: string,
  payload: UpdateProviderPayload,
) => {
  const result = await prisma.provider.update({
    where: {
      userId: userId,
    },
    data: payload,
  });
  return result;
};

const getMyProvider = async (userId: string) => {
  return await prisma.provider.findUnique({
    where: {
      userId,
    },
  });
};

export const providerService = {
  createProvider,
  deleteProvider,
  updateProvider,
  getMyProvider,
};
