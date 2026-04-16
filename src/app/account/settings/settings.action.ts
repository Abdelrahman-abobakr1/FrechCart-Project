"use server"

import { BASE_URL } from "@/constants/api";
import { getUserToken } from "@/app/myUtility";

export async function updateUserProfile(data: { name: string; email: string; phone: string }) {
  const token = await getUserToken();
  if (!token) return { success: false, message: "Unauthorized. Please sign in again." };

  const response = await fetch(`${BASE_URL}/api/v1/users/updateMe`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token,
    },
    body: JSON.stringify(data),
  });

  const resData = await response.json();
  if (response.ok && resData.message === "success") {
    return { success: true, message: "Profile updated successfully!", user: resData.user };
  } else {
    return { success: false, message: resData.errors?.msg || resData.message || "Failed to update profile." };
  }
}

export async function updateUserPassword(data: any) {
  const token = await getUserToken();
  if (!token) return { success: false, message: "Unauthorized. Please sign in again." };

  const response = await fetch(`${BASE_URL}/api/v1/users/changeMyPassword`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token,
    },
    body: JSON.stringify(data),
  });

  const resData = await response.json();
  if (response.ok && resData.token) {
    return { success: true, message: "Password updated successfully!", token: resData.token };
  } else {
    return { success: false, message: resData.errors?.msg || resData.message || "Failed to update password." };
  }
}
