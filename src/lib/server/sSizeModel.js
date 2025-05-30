'use server';

import prisma from "../db";

export const getCategories = async () => {
    try {
      const categories = await prisma.Category.findMany({});
      return categories;
    }
    catch (e) {
        console.log(e);
    }
}
export const getRegions = async () => {
    try {
      const regions = await prisma.Region.findMany({});
      return regions;
    }
    catch (e) {
        console.log(e);
    }
}
export const getSizes = async (regionId, categoryId) => {
    try {
      const sizes = await prisma.Size.findMany({
        where: {
          region_id: regionId,
          category_id: categoryId
        }
      });
      return sizes;
    } catch (e) {
      console.log(e);
      return [];
    }
}
export const getConversions = async (fromSizeId) => {
  try {
    return await prisma.conversion.findMany({
      where: {
        from_size_id: Number(fromSizeId)
      },
      include: {
        toSize: true
      }
    });
  } catch (e) {
    console.error('Conversion error:', e);
    return [];
  }
}