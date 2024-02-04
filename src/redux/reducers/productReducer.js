import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch product data from the API
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://epic-emporium.onrender.com/api/product/all");
    return response.data; // Assuming API returns an array of products
  }
);

// Define initial state for the products slice
const initialState = {
  products: [],
  status: "idle", // "idle", "loading", "succeeded", or "failed"
  error: null,
};

// Create a slice for managing products state
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading"; // Set status to "loading" while fetching data
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded"; // Set status to "succeeded" when data fetching is successful
        state.products = action.payload; // Update products array with fetched data
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed"; // Set status to "failed" if data fetching fails
        state.error = action.error.message; // Store error message
      });
  },
});

// Export reducer and action creators
export const { } = productsSlice.actions;
export default productsSlice.reducer;

// Selector function to access products array from the state
export const selectAllProducts = (state) => state.products.products;
