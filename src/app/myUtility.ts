"use server";

import { getServerSession } from "next-auth";
import { nextAuthConfig } from "@/NextAuth/NextAuth";

export async function getUserToken() {
  const session = await getServerSession(nextAuthConfig);
  if (!session) return null;
  const token = (session as any)?.user?.credentialToken as string | undefined;
  if (!token) return null;
  return token;
}
