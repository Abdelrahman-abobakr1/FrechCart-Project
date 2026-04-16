"use server";

import { getUserToken } from "@/app/myUtility";
import { revalidatePath } from "next/cache";

const BASE_URL = "https://ecommerce.routemisr.com";

export async function getAddresses() {
  const token = await getUserToken();
  if (!token) return [];
  try {
    const res = await fetch(`${BASE_URL}/api/v1/addresses`, {
      headers: { token: token as string },
      cache: "no-store",
    });
    const data = await res.json();
    return data.data || [];
  } catch {
    return [];
  }
}

export async function addAddress(payload: { name: string; details: string; phone: string; city: string }) {
  const token = await getUserToken();
  if (!token) return { success: false, message: "Unauthorized" };
  try {
    const res = await fetch(`${BASE_URL}/api/v1/addresses`, {
      method: "POST",
      headers: { token: token as string, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (data.status === "success") {
      revalidatePath("/account/addresses");
      return { success: true };
    }
    return { success: false, message: data.message };
  } catch {
    return { success: false, message: "Failed to add address" };
  }
}

export async function deleteAddress(id: string) {
  const token = await getUserToken();
  if (!token) return { success: false };
  try {
    await fetch(`${BASE_URL}/api/v1/addresses/${id}`, {
      method: "DELETE",
      headers: { token: token as string },
    });
    revalidatePath("/account/addresses");
    return { success: true };
  } catch {
    return { success: false };
  }
}

export async function updateAddress(id: string, payload: { name: string; details: string; phone: string; city: string }) {
  const token = await getUserToken();
  if (!token) return { success: false, message: "Unauthorized" };
  try {
    const res = await fetch(`${BASE_URL}/api/v1/addresses/${id}`, {
      method: "PUT",
      headers: { token: token as string, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (data.status === "success") {
      revalidatePath("/account/addresses");
      return { success: true };
    }
    return { success: false, message: data.message };
  } catch {
    return { success: false, message: "Failed to update address" };
  }
}
