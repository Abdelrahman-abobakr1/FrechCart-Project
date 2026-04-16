"use server";
import { BASE_URL } from "@/constants/api";
import { cookies } from "next/headers";
import { RegisterResponse, userDataType } from "./register";
import { redirect } from "next/navigation";

export async function handleUserRegister(
  userData: userDataType,
): Promise<string | boolean> {
  const response = await fetch(
    `${BASE_URL}/api/v1/auth/signup`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    },
  );
    const data: RegisterResponse = await response.json();
    const cookie = await cookies();
    cookie.set('token', data.token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        sameSite:'strict',
    });
  if (data.message === "success") {
    return true;
  }
  return data.message;
}
