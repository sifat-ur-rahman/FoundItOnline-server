import prisma from "../../../shared/prisma";

const createClaimIntoBD = async (user: any, payload: any) => {
  const userId = user.userId;
  const { foundItemId, distinguishingFeatures, lostDate } = payload;

  // Create the found item
  const foundItems = await prisma.claim.create({
    data: {
      userId,
      foundItemId,
      distinguishingFeatures,
      lostDate,
    },
  });

  return foundItems;
};

const getClaimByUserFromDB = async (user: any) => {
  const claims = await prisma.claim.findMany({
    where: {
      userId: user.userId,
    },
    include: {
      foundItem: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              createdAt: true,
              updatedAt: true,
            },
          },
          category: true,
        },
      },
    },
  });

  return claims;
};

const UpdateClaimByIdFromDB = async (id: any, params: any) => {
  const { status } = params;

  // Update the claim status
  const updatedClaim = await prisma.claim.update({
    where: {
      id: id,
    },
    data: {
      status,
    },
  });

  return updatedClaim;
};
export const ClaimService = {
  createClaimIntoBD,
  getClaimByUserFromDB,
  UpdateClaimByIdFromDB,
};
