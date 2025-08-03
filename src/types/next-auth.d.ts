import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    // o NextAuth já coloca o user id em `sub`
    // se quiser, você pode espelhar em id também:
    id?: string;
  }
}
