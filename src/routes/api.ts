import { lazy } from "react";

const payment = lazy(() => import("../pages/pay/payment"));
const ProductCart = lazy(() => import("../pages/cartPage/cart"));
const UserAccount = lazy(() => import("../pages/updateUser/updateUser"));

const SignIn = lazy(() => import("../pages/signIn/SignIn"));
const SignUp = lazy(() => import("../pages/signUp/SignUp"));

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const CategoryPage = lazy(() => import("../pages/categoryPage"));
const ProductsPage = lazy(() => import("../pages/products/productsPage"));
const ProductDetails = lazy(
  () => import("../pages/productDetailPage/productdetails")
);

export const routes = [
  {
    path: "/",
    Element: HomePage,
  },
  // {
  //   path: "/Amazon-Clone-Project",
  //   Element: HomePage,
  // },
  {
    path: "/Amazon-Clone-Project/products",
    Element: ProductsPage,
  },

  {
    path: "/Amazon-Clone-Project/categories/:id",
    Element: CategoryPage,
  },
  {
    path: "/Amazon-Clone-Project/products/:id",
    Element: ProductDetails,
  },

  {
    path: "/Amazon-Clone-Project/signin",
    Element: SignIn,
  },
  {
    path: "/Amazon-Clone-Project/signup",
    Element: SignUp,
  },
];

export const protectedRoutes = [
  {
    path: "/Amazon-Clone-Project/account",
    Element: UserAccount,
  },

  {
    path: "/Amazon-Clone-Project/cart",
    Element: ProductCart,
  },
  {
    path: "/Amazon-Clone-Project/payment",
    Element: payment,
  },
];
