import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// Async action creator for fetching all products
export const getAllProducts = createAsyncThunk('products/fetchAllProducts', async () => {

  // Making a GET request to retrieve all products from the server
  const res = await fetch("https://epic-emporium-backend.onrender.com/api/product/all");
  const data = await res.json();
  return data.data;
},)

// Async action creator for fetching a product by ID
export const getProductByID = createAsyncThunk('products/fetchProductByID', async (productID) => {

  // Making a GET request to retrieve a product by ID from the server
  const res = await fetch(`https://epic-emporium-backend.onrender.com/api/product/${productID}`);
  const data = await res.json();
  return data.data;
},)

// Async action creator for fetching products by category
export const getProductByCategory = createAsyncThunk('products/fetchProductByCategory', async (category) => {

  // Making a GET request to retrieve products by category from the server
  const res = await fetch(`https://epic-emporium-backend.onrender.com/api/product/category/${category}`);
  const data = await res.json();
  return data.data;
},)

// Initial state for the product slice of the Redux store
const initialState = {

  singleProductDetails: {}, // Details of a single product
  singleProductDetailsPending: false,  // Flag indicating if fetching details of a single product is pending
  productsArrayPending: false, // Flag indicating if fetching all products is pending
  specificCategoryArrayPending: false, // Flag indicating if fetching products by category is pending
  productsArray: [],  // Array to hold all products
  filteredProductArray: [],  // Array to hold filtered products
  searchResultArray: [],  // Array to hold search results
  specificCategoryArray: [], // Array to hold products of a specific category

}

// Then, handle actions in your reducers:
const productSlice = createSlice({
  name: 'products', // Slice name
  initialState, // Initial state

  reducers: {

    // Action for searching products
    searchProducts: (state, action) => {

      let inputValue = action.payload.toUpperCase();
      if (!inputValue) {
        state.searchResultArray = [];
      } else {
        const temp = state.productsArray.filter((product) => {
          let productName = product.title.toUpperCase();
          return productName.indexOf(inputValue) == 0;
        });
        state.searchResultArray = temp;
      }
    },

    // Action for filtering products by category
    filterByCategory: (state, action) => {

      const { accCat, othCat, menCat, womCat, jelCat, eleCat, maxPrice } = action.payload;
      state.filteredProductArray = state.productsArray;

      // Filtering products based on selected categories
      let accessory = [];
      if (accCat) {
        accessory = state.filteredProductArray.filter((product) => product.category == "accessories" && product.price <= maxPrice);
      }

      let others = [];
      if (othCat) {
        others = state.filteredProductArray.filter((product) => product.category == "kids" && product.price <= maxPrice);
      }

      let man = [];
      if (menCat) {
        man = state.filteredProductArray.filter((product) => product.category == "men" && product.price <= maxPrice);
      }
      let woman = [];
      if (womCat) {
        woman = state.filteredProductArray.filter((product) => product.category == "woman" && product.price <= maxPrice);
      }
      let jewellery = [];
      if (jelCat) {
        jewellery = state.filteredProductArray.filter((product) => product.category == "jewelery" && product.price <= maxPrice)
      }
      let electronic = [];
      if (eleCat) {
        electronic = state.filteredProductArray.filter((product) => product.category == "electronics" && product.price <= maxPrice);
      }

      // Update the product array based on selected categories
      if (!eleCat && !jelCat && !womCat && !menCat && !othCat && !accCat) {
        state.filteredProductArray = state.productsArray.filter((product) => product.price <= maxPrice);
      } else {
        const temp = [...man, ...jewellery, ...electronic, ...woman, ...others, ...accessory];
        state.filteredProductArray = temp;
      }
    }
  },

  extraReducers: (builder) => {

    builder
      //getAllProducts
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.productsArray = action.payload;
        state.filteredProductArray = action.payload;
        state.productsArrayPending = false;
      })
      .addCase(getAllProducts.pending, (state, action) => {
        state.productsArrayPending = true;
      })
      //getProductByID 
      .addCase(getProductByID.fulfilled, (state, action) => {
        state.singleProductDetails = action.payload;
        state.singleProductDetailsPending = false;
      })
      .addCase(getProductByID.pending, (state, action) => {
        state.singleProductDetailsPending = true;
      })
      //GET PRODUCT BY CATEGORY
      .addCase(getProductByCategory.fulfilled, (state, action) => {
        state.specificCategoryArray = action.payload;
        state.specificCategoryArrayPending = false;
      })
      .addCase(getProductByCategory.pending, (state, action) => {
        state.specificCategoryArrayPending = true;
      })
  },
})

export const { searchProducts, filterByCategory, specificCategoryArray, specificCategoryArrayPending } = productSlice.actions;

export default productSlice.reducer;