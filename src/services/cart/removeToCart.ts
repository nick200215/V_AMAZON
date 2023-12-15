import { baseAPI } from "../baseAPI";
const token = localStorage.getItem("token");

export const removeCartItemBase = async (productId: string) => {
  const response = await baseAPI.delete(`/api/cart/removefromcart`, {
    data: { productId },
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  return response.data ? productId : false;
};
