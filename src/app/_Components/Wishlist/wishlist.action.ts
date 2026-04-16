"use server";

import { BASE_URL } from "@/constants/api";
import { getUserToken } from "@/app/myUtility";
import { revalidatePath } from "next/cache";

const BASE = BASE_URL;

export async function addToWishlist(productId: string) {
  const token = await getUserToken();
  if (!token) throw new Error("Wishlist requires login. Please sign in.");
  const res = await fetch(`${BASE}/api/v1/wishlist`, {
    method: "POST",
    headers: { token: token as string, "Content-Type": "application/json" },
    body: JSON.stringify({ productId }),
  });
  revalidatePath("/wishlist");
  const data = await res.json();
  if (data.status !== "success") throw new Error(data.message || "Failed to add to wishlist");
  return data;
}

export async function removeFromWishlist(productId: string) {
  const token = await getUserToken();
  if (!token) throw new Error("Wishlist requires login. Please sign in.");
  const res = await fetch(`${BASE}/api/v1/wishlist/${productId}`, {
    method: "DELETE",
    headers: { token: token as string },
  });
  revalidatePath("/wishlist");
  const data = await res.json();
  if (data.status !== "success") throw new Error(data.message || "Failed to remove from wishlist");
  return data;
}

export async function getWishlist() {
  const token = await getUserToken();
  if (!token) return [];
  const res = await fetch(`${BASE}/api/v1/wishlist`, {
    method: "GET",
    headers: { token: token as string },
    cache: "no-store",
  });
  const data = await res.json();
  return data?.data ?? [];
}
