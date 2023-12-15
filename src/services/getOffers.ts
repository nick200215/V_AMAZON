import { AxiosResponse } from "axios";
import { baseAPI } from "./baseAPI";
import { Products } from "../types/CategoriesResponse";

export const getOffers = (): Promise<AxiosResponse<Products[]>> => {
  return baseAPI.get("/api/product/offers");
};
