import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getAllProducts = createAsyncThunk('products/fetchAllProducts', async () => {

  const res = await fetch("http://127.0.0.1:5100/api/product/all");
  const data = await res.json();
  return data.data;

},)


export const getProductByID = createAsyncThunk('products/fetchProductByID', async (productID) => {

  const res = await fetch(`http://127.0.0.1:5100/api/product/${productID}`);
  const data = await res.json();
  return data.data;

},)

export const getProductByCategory = createAsyncThunk('products/fetchProductByCategory', async (category) => {

  const res = await fetch(`http://127.0.0.1:5100/api/product/category/${category}`);
  const data = await res.json();
  return data.data;

},)

const initialState = {


  singleProductDetails: {},
  singleProductDetailsPending: false,
  productsArrayPending: false,
  specificCategoryArrayPending: false,
  productsArray: [],
  filteredProductArray: [],
  searchResultArray: [],
  specificCategoryArray: [],


}

// Then, handle actions in your reducers:
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

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


    filterByCategory: (state, action) => {

      const { accCat, othCat, menCat, womCat, jelCat, eleCat, maxPrice } = action.payload;

      state.filteredProductArray = state.productsArray;

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
        console.log("FULFILLED")
      })
      .addCase(getAllProducts.pending, (state, action) => {
        state.productsArrayPending = true;
        console.log("PENDING");
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        console.log("Rejected");
      })
      //getProductByID 
      .addCase(getProductByID.fulfilled, (state, action) => {
        state.singleProductDetails = action.payload;
        state.singleProductDetailsPending = false;
        console.log("FULFILLED");
      })
      .addCase(getProductByID.pending, (state, action) => {
        state.singleProductDetailsPending = true;
        console.log("PENDING");
      })
      .addCase(getProductByID.rejected, (state, action) => {
        console.log("REJECTED");
      })
      //GET PRODUCT BY CATEGORY
      .addCase(getProductByCategory.fulfilled, (state, action) => {
        state.specificCategoryArray = action.payload;
        state.specificCategoryArrayPending = false;
        console.log("FULFILLED");
      })
      .addCase(getProductByCategory.pending, (state, action) => {
        state.specificCategoryArrayPending = true;
        console.log("PENDING")
      })
      .addCase(getProductByCategory.rejected, (state, action) => {
        console.log("REJECTED")
      })
  },


})

export const { searchProducts, filterByCategory, specificCategoryArray, specificCategoryArrayPending } = productSlice.actions;

export default productSlice.reducer;