import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../services/getProducts";
import { Product } from "../types/products";

type categoryProductsSlice = Record<string, Product[]>;

const initialState: categoryProductsSlice = {};

export const getCategoryProducts = createAsyncThunk(
  "categoryProducts",
  getProducts
);

const categoryProductsSlice = createSlice({
  name: "categoryProducts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCategoryProducts.fulfilled, (state, action) => {
      const payload = action.payload;
      if (Array.isArray(payload)) {
        state["allProducts"] = payload;
      } else if (payload.data && payload.id) {
        state[payload.id] = payload.data;
      }
    });
  },
});

export default categoryProductsSlice.reducer;
