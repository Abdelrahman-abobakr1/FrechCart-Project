"use server"

import { BASE_URL } from "@/constants/api";
import { getUserToken } from "@/app/myUtility";
import { revalidatePath } from "next/cache";

export async function createCashOrder(cartId: string, shippingAddress: any) {
    try {
        const userToken = await getUserToken();
        
        const response = await fetch(`${BASE_URL}/api/v1/orders/${cartId}`, {
            method: "POST",
            headers: {
                token: (userToken as string),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ shippingAddress })
        });
        
        const data = await response.json();
        
        if (data.status === "success") {
            revalidatePath('/cart');
            revalidatePath('/orders');
        }
        
        return data;
    } catch (error) {
        return { status: "fail", message: "Failed to process order" };
    }
}

export async function createOnlineOrder(cartId: string, shippingAddress: any, baseUrl: string) {
    try {
        const userToken = await getUserToken();
        
        const response = await fetch(`${BASE_URL}/api/v1/orders/checkout-session/${cartId}?url=${baseUrl}`, {
            method: "POST",
            headers: {
                token: (userToken as string),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ shippingAddress })
        });
        
        const data = await response.json();
        return data;
    } catch (error) {
        return { status: "fail", message: "Failed to process online order" };
    }
}
