import GoogleProvider from "next-auth/providers/google";
import YandexProvider from "next-auth/providers/yandex";
import { getCustomer4Token } from "./server/sCusomerModel";


export const authOptions = {
  providers: [
    YandexProvider({
      clientId: process.env.YANDEX_CLIENT_ID,
      clientSecret: process.env.YANDEX_CLIENT_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  jwt: {
    maxAge: 60 * 60 * 24 * 60
  },
  callbacks: {
    async session({ session, token, user }) {
      const customer = await getCustomer4Token(session);
      if (!customer) return;
      session.customer = customer;
      session.accessToken = token.accessToken;
      session.user.id = token.id;
      return session;
    }
  }
};
