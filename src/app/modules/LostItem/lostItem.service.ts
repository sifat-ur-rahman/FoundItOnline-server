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

const getLostItemsFromDB = async (query: any) => {
  const {
    searchTerm,
    page = 1,
    limit = 10,
    sortBy,
    sortOrder,
    category,
  } = query;

  // Prepare filters
  let where: any = {};
  if (searchTerm) {
    where = {
      OR: [
        {
          locationFound: {
            contains: searchTerm as string,
            mode: "insensitive",
          },
        },
        {
          description: { contains: searchTerm as string, mode: "insensitive" },
        },
      ],
    };
  }
  if (category) {
    where.category = {
      contains: category as string,
      mode: "insensitive",
    };
  }

  // Prepare sorting
  const orderBy = sortBy
    ? { [sortBy as string]: sortOrder || "asc" }
    : undefined;

  // Retrieve paginated and filtered found items
  const lostItems = await prisma.lostItem.findMany({
    where,
    orderBy,
    take: Number(limit),
    skip: (Number(page) - 1) * Number(limit),
  });

  const total = await prisma.lostItem.count({ where });
  const responseData = {
    meta: {
      total,
      page: Number(page),
      limit: Number(limit),
    },
    data: lostItems,
  };

  return responseData;
};

const getLostItemsByUserIdFromDB = async (userId: any) => {
  const lostItems = await prisma.lostItem.findMany({
    where: {
      userId: userId,
    },
  });

  return lostItems;
};
export const LostItemService = {
  createLostItemIntoBD,
  getLostItemsFromDB,
  getLostItemsByUserIdFromDB,
};
