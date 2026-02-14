import { prisma } from "../../lib/prisma";

const getMyOrders = async (userId: string) => {
  return await prisma.order.findMany({
    where: {
      customerId: userId,
    },
  });
};

export const orderService = { getMyOrders };
