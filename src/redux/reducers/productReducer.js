import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getAllProducts = createAsyncThunk('products/fetchAllProducts', async () => {

  const res = await fetch("http://127.0.0.1:5100/api/product/all");
  const data = await res.json();
  return data.data;

},)

const initialState = {
  productsArray: [],
  searchResultArray: [],
  isProductFetched: false,
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
  },

  extraReducers: (builder) => {

    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.productsArray = action.payload;
      state.isProductFetched = true;
      // console.log("FULFILLED")
    })
      .addCase(getAllProducts.pending, (state, action) => {
        state.isProductFetched = false;
        // console.log("PENDING");
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        // console.log("Rejected");
      })
  },


})

export const { searchProducts } = productSlice.actions;
export const productSelector = (state) => state.products.productsArray;


export default productSlice.reducer