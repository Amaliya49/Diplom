'use server';
import prisma from "../db";

// Сохранение нового избранного размера
export const saveFavoriteSize = async ({ customer_id, size_id, title, description }) => {
  try {
    return await prisma.favoriteSize.create({
      data: {
        customer_id: Number(customer_id),
        size_id: Number(size_id),
        title,
        description,
        gender: 'UNISEX'
      },
      include: {
        size: {
          include: {
            region: true
          }
        }
      }
    });
  } catch (error) {
    console.error("Ошибка сохранения:", error);
    throw error;
  }
};

// Получение избранных размеров пользователя
export const getFavoriteSizes = async (customer_id) => {
  try {
    return await prisma.favoriteSize.findMany({
      where: {
        customer_id: Number(customer_id)
      },
      include: {
        size: {
          include: {
            region: true,
            category: true
          }
        }
      },
      orderBy: {
        updated_at: 'desc'
      }
    });
  } catch (error) {
    console.error("Ошибка получения:", error);
    throw new Error("Не удалось получить избранные размеры");
  }
};

// Обновление избранного размера
export const updateFavoriteSize = async ({ id, description, gender }) => {
  try {
    return await prisma.favoriteSize.update({
      where: { id: Number(id) },
      data: { 
        description,
        gender
      },
      include: {
        size: {
          include: {
            region: true
          }
        }
      }
    });
  } catch (error) {
    console.error("Ошибка обновления:", error);
    throw error;
  }
};

// Удаление избранного размера
export const deleteFavoriteSize = async (id) => {
  try {
    await prisma.favoriteSize.delete({
      where: { id: Number(id) }
    });
    return true;
  } catch (error) {
    console.error("Ошибка удаления:", error);
    throw error;
  }
};

// Новые Server Actions для прямого вызова из компонента
export const updateFavoriteSizeAction = async (formData) => {
  try {
    const id = formData.get('id');
    const description = formData.get('description');
    const gender = formData.get('gender');
    
    return await updateFavoriteSize({ 
      id: Number(id), 
      description, 
      gender 
    });
  } catch (error) {
    console.error("Update failed:", error);
    throw error;
  }
};

export const deleteFavoriteSizeAction = async (id) => {
  try {
    await deleteFavoriteSize(Number(id));
    return { success: true };
  } catch (error) {
    console.error("Delete failed:", error);
    throw error;
  }
};

