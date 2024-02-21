import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// Async action creator for adding a product to the cart
export const addToCart = createAsyncThunk('cart/addToCartByID', async (productID) => {

    // Making a POST request to the server to add the product to the cart
    await fetch(`https://epic-emporium-backend.onrender.com/api/cart/add/${productID}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("customerToken"),
        },
        body: JSON.stringify({}),
    })
},)

// Async action creator for removing a product from the cart
export const removeFromCart = createAsyncThunk('cart/removeFromCart', async (productID) => {

    // Making a DELETE request to the server to remove the product from the cart
    const res = await fetch(`https://epic-emporium-backend.onrender.com/api/cart/delete/${productID}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("customerToken"),
        },
        body: JSON.stringify({}),
    })
    const data = await res.json();
    return data;
},)

// Async action creator for increasing the quantity of a product in the cart
export const increaseQuantity = createAsyncThunk('cart/increaseQuantity', async (productID) => {

    // Making a PUT request to the server to increase the quantity of the product in the cart
    const res = await fetch(`https://epic-emporium-backend.onrender.com/api/cart/increase/${productID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("customerToken"),
        },
        body: JSON.stringify({}),
    })
    const data = await res.json();
    return data.data;
},)


// Async action creator for decreasing the quantity of a product in the cart
export const decreaseQuantity = createAsyncThunk('cart/decreaseQuantity', async (productID) => {

    // Making a PUT request to the server to decrease the quantity of the product in the cart
    const res = await fetch(`https://epic-emporium-backend.onrender.com/api/cart/decrease/${productID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("customerToken"),
        },
        body: JSON.stringify({}),
    })
    const data = await res.json();
    return data;
},)

// Async action creator for retrieving all products in the cart
export const getAllCartProduct = createAsyncThunk('cart/getCartProduct', async () => {

    // Making a GET request to the server to retrieve all products in the cart
    const res = await fetch("https://epic-emporium-backend.onrender.com/api/cart/all", {
        method: 'GET',
        headers: {
            'Authorization': localStorage.getItem("customerToken"),
        }
    });
    const data = await res.json();
    return data.data;
},)

// Initial state for the cart slice of the Redux store
const initialState = {
    cartArray: [], // Array to hold the products in the cart
    getAllCartProductPending: false, // Flag indicating if retrieving all products in the cart is pending
}

// Creating a slice of the Redux store for managing the cart state
export const cartSlice = createSlice({
    name: 'cart',  // Slice name
    initialState, // Initial state
    reducers: {

    }, extraReducers: (builder) => {

        builder
            //GET ALL CART PRODUCT ARRAY
            .addCase(getAllCartProduct.fulfilled, (state, action) => {
                state.cartArray = action.payload;
                state.getAllCartProductPending = false;
            })
            //REMOVE FROM CART
            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.cartArray = action.payload;
            })
            //INCREASE QUANTITY
            .addCase(increaseQuantity.fulfilled, (state, action) => {
                state.cartArray = action.payload;
            })
            //DECREASE QUANTITY
            .addCase(decreaseQuantity.fulfilled, (state, action) => {
                state.cartArray = action.payload;
            })
    },
})

export default cartSlice.reducer