import { Product } from "./products";

export interface UserType {
  email: string;
  exp: number;
  iat: number;
  nameid: string;
  nbf: number;
  role?: "Customer" | "Admin" | "Moderator";
  unique_name: string;
  isLoggedIn: boolean;
  isLoaded: boolean;
  cartItems: {
    isLoading: boolean;
    isLoaded: boolean;
    isError: boolean;
    data: Record<string, Product>;
  };
}
