import { Product } from "../types/products";
import { baseAPI } from "./baseAPI";

export const getProducts = async ({
  query = "",
  id = "",
}): Promise<Product[] | { data: Product[]; id: string }> => {
  try {
    const response = await baseAPI.get(`/api/product/products?${query}`);

    if (query) {
      return {
        data: response.data,
        id,
      };
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
