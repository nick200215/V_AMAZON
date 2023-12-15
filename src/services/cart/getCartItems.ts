import { Product } from "../../types/products";
import { baseAPI } from "../baseAPI";

export const getCartItems = async (): Promise<Product[]> => {
  const token = localStorage.getItem("token");
  const response = await baseAPI.get("/api/cart/getmycartproducts", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.data;
};
