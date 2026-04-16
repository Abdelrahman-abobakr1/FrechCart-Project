import { BASE_URL } from "@/constants/api";
import { AllCategoriesData, AllCategoriesResponse } from "./Category";

export async function getAllCategories():Promise<AllCategoriesData[]> {
    const response = await fetch(`${BASE_URL}/api/v1/categories`, {
        cache:'force-cache',
    });
    const data: AllCategoriesResponse = await response.json();
    return data.data
}
