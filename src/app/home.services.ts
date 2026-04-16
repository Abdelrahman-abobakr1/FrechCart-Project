import { BASE_URL } from "@/constants/api";
import { AllProductsData, AllProductsResponse, Category, ProductDetailsResponse } from "./home.interface";

 export async function getAllProducts(): Promise<AllProductsData[]> {
    const response = await fetch(
      `${BASE_URL}/api/v1/products`, {
        cache:'force-cache',  
      },
    );
   const data: AllProductsResponse = await response.json();
    return data.data;
} 
  export async function getSpecificProduct(id: string): Promise<AllProductsData> {
    const response = await fetch(
      `${BASE_URL}/api/v1/products/${id}`,
    );
    const data: ProductDetailsResponse = await response.json();
    return data.data;
  }

  export async function getProductsByCategory(categoryId: string): Promise<AllProductsData[]> {
    const response = await fetch(
      `${BASE_URL}/api/v1/products?category[in]=${categoryId}`, {
        cache: 'no-store'
      }
    );
    const data: AllProductsResponse = await response.json();
    return data.data;
  }

  export async function getSpecificCategory(categoryId: string): Promise<Category> {
    const response = await fetch(
      `${BASE_URL}/api/v1/categories/${categoryId}`,
    );
    const data = await response.json();
    return data.data;
  }

  export async function getAllBrands() {
    const response = await fetch(`${BASE_URL}/api/v1/brands`, {
      cache: "force-cache",
    });
    const data = await response.json();
    return data.data;
  }

  export async function getSpecificBrand(brandId: string) {
    const response = await fetch(`${BASE_URL}/api/v1/brands/${brandId}`);
    const data = await response.json();
    return data.data;
  }

  export async function getProductsByBrand(brandId: string): Promise<AllProductsData[]> {
    const response = await fetch(
      `${BASE_URL}/api/v1/products?brand=${brandId}`, {
        cache: 'no-store'
      }
    );
    const data: AllProductsResponse = await response.json();
    return data.data;
  }