import { UserStatus } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";

const getAllUsers = async () => {
  return await prisma.user.findMany();
};

const updateUserAdmin = async (userId: string, payload: UserStatus) => {
  const response = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      status: payload,
    },
  });
  return response;
};

export const adminService = { getAllUsers, updateUserAdmin };
