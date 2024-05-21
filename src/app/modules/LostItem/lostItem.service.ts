import prisma from "../../../shared/prisma";

const createLostItemIntoBD = async (data: any) => {
  const {
    userId,
    category,
    description,
    dateLost,
    locationLost,
    contactPhone,
    contactEmail,
    images,
  } = data;

  // Create the LostItem
  const LostItem = await prisma.lostItem.create({
    data: {
      userId,
      category,
      description,
      dateLost,
      locationLost,
      contactPhone,
      contactEmail,
      images,
    },
  });
  return LostItem;
};

export const LostItemService = {
  createLostItemIntoBD,
};
