import { Product } from "../../types/products";
import { baseAPI } from "../baseAPI";
const token = localStorage.getItem("token");
export const addToCart = (product: Product) =>
  baseAPI.post(
    "/api/cart/addincart",
    { productId: product.id },
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
