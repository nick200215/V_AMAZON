import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../services/getProducts";
import { getProductByIdBase } from "../services/products/getProductById";
import { Product } from "../types/products";

type ProductsType = {
  isLoaded: boolean;
  isLoading: boolean;
  isError: boolean;
  progressName?: string;
  data: Record<string, Product>;
};

const initialState: ProductsType = {
  isLoaded: false,
  isLoading: true,
  isError: false,
  data: {},
};

export const getAllProducts = createAsyncThunk(
  "products/getProducts",
  getProducts
);

export const getProductById = createAsyncThunk(
  "products/getProductById",
  getProductByIdBase
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoaded = true;
      state.isLoading = false;

      // Handle the case where action.payload is an array of products
      if (Array.isArray(action.payload)) {
        const myObj: Record<string, Product> = {};
        action.payload.forEach((prod: Product) => (myObj[prod.id] = prod));
        state.data = myObj;
      }
      // Handle the case where action.payload contains a 'data' property
      else if (action.payload.data) {
        const myObj: Record<string, Product> = {};
        action.payload.data.forEach((prod: Product) => (myObj[prod.id] = prod));
        state.data = myObj;
      }
    });

    builder.addCase(getProductById.fulfilled, (state, { payload }) => {
      state.data[payload.id] = payload;
    });
  },
});

export default productsSlice.reducer;
