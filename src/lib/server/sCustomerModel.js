'use server';
import prisma from "../db";

export const getCustomer4Token = async (session) => {
  const { email, image, name } = session.user;

  try {
    // 1. Поиск пользователя с полной информацией о размерах
    let customer = await prisma.Customer.findFirst({
      where: { email },
      include: { 
        favoriteSizes: {
          include: {
            size: true
          }
        }
      }
    });

    // 2. Обновление пользователя с сохранением связей
    if (customer) {
      customer = await prisma.Customer.update({
        where: { email },
        data: { image, name },
        include: {
          favoriteSizes: {
            include: {
              size: true
            }
          }
        }
      });
      return customer;
    }

    // 3. Создание нового пользователя
    customer = await prisma.Customer.create({
      data: { email, image, name }
    });
    return customer;

  } catch (e) {
    console.error("Error in getCustomer4Token:", e);
    throw e;
  }
};