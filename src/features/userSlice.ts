import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../types/user";
import { getCartItems } from "../services/cart/getCartItems";
import { removeCartItemBase } from "../services/cart/removeToCart";
import { Product } from "../types/products";

const initialState: UserType = {
  isLoggedIn: false,
  isLoaded: false,
  email: "",
  exp: 0,
  iat: 0,
  nameid: "",
  nbf: 0,
  role: undefined,
  unique_name: "",
  cartItems: {
    isLoading: true,
    isLoaded: false,
    isError: false,
    data: {},
  },
};

export const getCartItem = createAsyncThunk<Product[]>(
  "cart/items",
  getCartItems
);

export const removeCartItem = createAsyncThunk(
  "cart/remove",
  removeCartItemBase
);

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleLogin: (state, action: PayloadAction<UserType>) => {
      state.isLoggedIn = true;
      Object.assign(state, action.payload);
    },
    handleAddProduct: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      state.cartItems.data[product.id] = product;
    },

    handleLogout: () => {
      localStorage.removeItem("token");
      window.location.href = "/";
    },
    handleRemoveOptimisticProduct: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      if (state.cartItems.data[productId]) {
        delete state.cartItems.data[productId];
      }
    },
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  handleInputChange: (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    state,
    action: PayloadAction<{ name: string; value: string }>
  ) => {
    const { name, value } = action.payload;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    state[name] = value;
  },
  extraReducers(builder) {
    builder.addCase(getCartItem.fulfilled, (state, action) => {
      state.cartItems.isLoaded = true;
      state.cartItems.isLoading = false;
      state.cartItems.isError = false;
      const newObj: Record<string, Product> = {};

      action.payload.forEach((product) => {
        newObj[product.id] = product;
      });

      state.cartItems.data = newObj;
    });

    builder.addCase(removeCartItem.fulfilled, (state, action) => {
      const productId = action.payload;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (state.cartItems.data[productId]) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        delete state.cartItems.data[productId];
      }
    });
  },
});

export const {
  handleLogin,
  handleLogout,
  handleAddProduct,
  handleRemoveOptimisticProduct,
  handleInputChange,
} = usersSlice.actions;
export default usersSlice.reducer;
