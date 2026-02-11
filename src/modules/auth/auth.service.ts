import { prisma } from "../../lib/prisma";

export interface UpdateUserProfileData {
  name: string;
  avatar: string;
  phone: string;
}

const updateUserProfile = async (
  userId: string,
  payload: UpdateUserProfileData,
) => {
  return await prisma.user.update({
    where: {
      id: userId,
    },
    data: payload,
  });
};

export const authService = { updateUserProfile };
