import prisma from "../../../shared/prisma";
import { ItemStatus, UserStatus } from "../../../../prisma/generated/client";

const createReportIntoBD = async (payload: any) => {
  const {
    userId,
    category,
    description,
    dateFound,
    locationFound,
    contactPhone,
    contactEmail,
    images,
  } = payload;

  // Create the found item
  const foundItem = await prisma.foundItem.create({
    data: {
      category,
      description,
      dateFound,
      locationFound,
      contactPhone,
      contactEmail,
      images,
      status: ItemStatus.AVAILABLE,
      userId,
    },
  });

  return foundItem;
};

const getFoundItemsFromDB = async (query: any) => {
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
  const foundItems = await prisma.foundItem.findMany({
    where,
    orderBy,
    take: Number(limit),
    skip: (Number(page) - 1) * Number(limit),
  });

  const total = await prisma.foundItem.count({ where });
  const responseData = {
    meta: {
      total,
      page: Number(page),
      limit: Number(limit),
    },
    data: foundItems,
  };

  return responseData;
};

const getFoundItemsByUserIdFromDB = async (userId: any) => {
  const FoundItems = await prisma.foundItem.findMany({
    where: {
      userId: userId,
    },
  });

  return FoundItems;
};
export const FoundItemsService = {
  createReportIntoBD,
  getFoundItemsFromDB,
  getFoundItemsByUserIdFromDB,
};
