import prisma from "../../../shared/prisma";

const createCategoryIntoBD = async (data: { name: string }) => {
  const { name } = data;

  // Create the category
  const category = await prisma.foundItemCategory.create({
    data: { name },
  });
  return category;
};

export const CategoryService = {
  createCategoryIntoBD,
};
