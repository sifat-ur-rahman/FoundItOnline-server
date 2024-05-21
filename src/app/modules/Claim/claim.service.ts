import prisma from "../../../shared/prisma";

const createClaimIntoBD = async (payload: any) => {
  const {
    userId,
    itemId,
    description,
    contactPhone,
    contactEmail,
    status = "PENDING",
    lostItemId,
    foundItemId,
  } = payload;

  // Create the Claim item
  const Claim = await prisma.claim.create({
    data: {
      itemId,
      description,
      contactPhone,
      contactEmail,
      status,
      userId,
      lostItemId,
      foundItemId,
    },
  });

  return Claim;
};

const getAllClaimFromDB = async (userId: any) => {
  const claims = await prisma.claim.findMany({
    where: {
      userId: userId,
    },
  });
  return claims;
};
const getClaimByUserFromDB = async (userId: any) => {
  const claims = await prisma.claim.findMany({
    where: {
      userId: userId,
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
  getAllClaimFromDB,
  getClaimByUserFromDB,
  UpdateClaimByIdFromDB,
};
