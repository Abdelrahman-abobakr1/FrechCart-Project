import { nextAuthConfig } from "@/NextAuth/NextAuth";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const myRouteHandlerObject = NextAuth(nextAuthConfig);
export {myRouteHandlerObject as GET , myRouteHandlerObject as POST }