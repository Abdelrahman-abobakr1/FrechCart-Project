import { nextAuthConfig } from "@/NextAuth/NextAuth";
import NextAuth from "next-auth";

const myRouteHandlerObject = NextAuth(nextAuthConfig);
export {myRouteHandlerObject as GET , myRouteHandlerObject as POST }