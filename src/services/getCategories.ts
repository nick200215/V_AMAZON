import { AxiosResponse } from "axios";
import { baseAPI } from "./baseAPI";
import { categoriesResponse } from "../types/CategoriesResponse";

export const getCategories = (): Promise<
  AxiosResponse<categoriesResponse[]>
> => {
  return baseAPI.get("/api/product/categories");
};
