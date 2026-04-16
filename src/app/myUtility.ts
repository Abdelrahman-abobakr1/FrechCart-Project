"use server";

import { getServerSession } from "next-auth";
import { nextAuthConfig } from "@/NextAuth/NextAuth";
import { headers } from "next/headers";

export async function getUserToken() {
  const headersList = await headers();
  const session = await getServerSession(nextAuthConfig);
  if (!session) return null;
  const token = (session as any)?.user?.credentialToken as string | undefined;
  if (!token) return null;
  return token;
}
