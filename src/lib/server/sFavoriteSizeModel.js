'use server';
import prisma from "../db";

export const saveFavoriteSize = async ({ customer_id, size_id, title, description }) => {
  try {
    // Создание записи с включением связанных данных о размере
    const savedSize = await prisma.FavoriteSize.create({
      data: {
        customer_id: Number(customer_id),
        size_id: Number(size_id),
        title,
        description,
        gender: 'UNISEX'
      },
      include: {
        size: true  // Включаем связанную сущность Size
      }
    });
    
    return savedSize;
  } catch (error) {
    console.error("Ошибка сохранения:", error);
    throw new Error("Не удалось сохранить размер");
  }
};

// Новый метод для получения избранных размеров с включением данных о размере
export const getFavoriteSizes = async (customer_id) => {
  try {
    return await prisma.FavoriteSize.findMany({
      where: {
        customer_id: Number(customer_id)
      },
      include: {
        size: true  // Включаем связанные данные
      }
    });
  } catch (error) {
    console.error("Ошибка получения:", error);
    throw new Error("Не удалось получить избранные размеры");
  }
};