import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const addToCart = createAsyncThunk('cart/addToCartByID', async (productID) => {

    const res = await fetch(`http://127.0.0.1:5100/api/cart/add/${productID}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token"),
        },
        body: JSON.stringify({}),
    })

    const data = await res.json();
    return data;
},)

export const getAllCartProduct = createAsyncThunk('cart/getCartProduct', async () => {

    const res = await fetch("http://127.0.0.1:5100/api/cart/all", {
        method: 'GET',
        headers: {
            'Authorization': localStorage.getItem("token"),
        }
    });

    const data = await res.json();

    return data.data;


},)


const initialState = {

    cartArray: [],
    addToCartPending: false,
    getAllCartProductPending: false,

}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

    }, extraReducers: (builder) => {

        builder
            //ADD TO CART
            .addCase(addToCart.fulfilled, (state, action) => {
                state.addToCartPending = false;
                console.log("FULFILLED")
            })
            .addCase(addToCart.pending, (state, action) => {
                state.addToCartPending = true;
                console.log("PENDING");
            })
            .addCase(addToCart.rejected, (state, action) => {
                console.log("Rejected");
            })

            //GET ALL CART PRODUCT ARRAY
            .addCase(getAllCartProduct.fulfilled, (state, action) => {
                state.cartArray = action.payload;
                state.getAllCartProductPending = false;
                console.log("FULFILLED")
            })
            .addCase(getAllCartProduct.pending, (state, action) => {
                state.getAllCartProductPending = true;
                console.log("PENDING");
            })
            .addCase(getAllCartProduct.rejected, (state, action) => {
                console.log("Rejected");
            })
    },
})

// Action creators are generated for each case reducer function
export const { } = cartSlice.actions

export default cartSlice.reducer