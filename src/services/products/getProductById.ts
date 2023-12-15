import { Product } from "../../types/products";
import { baseAPI } from "../baseAPI";

export const getProductByIdBase = async (id: string): Promise<Product> => {
  const response = await baseAPI.get(`/api/product/products/${id}`);
  return response.data;
};
