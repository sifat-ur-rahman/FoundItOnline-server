import { Prisma } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createReportIntoBD = async (user: any, payload: any) => {
  const userId = user.userId;
  const { categoryId, foundItemName, description, location } = payload;

  // Create the found item
  const foundItems = await prisma.foundItem.create({
    data: {
      userId,
      categoryId,
      foundItemName,
      description,
      location,
    },
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
      category: {
        select: {
          id: true,
          name: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    },
  });

  return foundItems;
};

const getFoundItemsFromDB = async (query: any) => {
  const {
    searchTerm,
    page = 1,
    limit = 10,
    sortBy,
    sortOrder,
    foundItemName,
  } = query;

  // Prepare filters
  let where: Prisma.FoundItemWhereInput = {};
  if (searchTerm) {
    where = {
      OR: [
        {
          foundItemName: {
            contains: searchTerm as string,
            mode: "insensitive",
          },
        },
        { location: { contains: searchTerm as string, mode: "insensitive" } },
        {
          description: { contains: searchTerm as string, mode: "insensitive" },
        },
      ],
    };
  }
  if (foundItemName) {
    where.foundItemName = {
      contains: foundItemName as string,
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
export const FoundItemsService = {
  createReportIntoBD,
  getFoundItemsFromDB,
};
