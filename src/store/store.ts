import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/productSlice";
import categoriProductsSlice from "../features/CategorieProductSlice";
import usersSlice from "../features/userSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    categoryProducts: categoriProductsSlice,
    user: usersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
