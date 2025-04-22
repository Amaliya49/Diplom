"use server";

import prisma from "../db";

export const getCustomer4Token = async (session) => {
  //console.log("getCustomer4Token() session", session);
  const { email, image, name } = session.user;

  try {
    let customer = await prisma.Customer.findFirst({
      where: {
        email
      }
    });

    if (customer) {
      customer = await prisma.Customer.update({
        where: {
          email
        },
        data: {
          image,
          name
        }
      });
      return customer;
    }

    customer = await prisma.Customer.create({
      data: { email, image, name, role:['CUSTOMER'] }
    });
    return customer;
  } catch (e) {
    console.log(e);
  }
};
