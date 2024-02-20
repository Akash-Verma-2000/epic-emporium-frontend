import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const addToCart = createAsyncThunk('cart/addToCartByID', async (productID) => {

    const res = await fetch(`http://127.0.0.1:5100/api/cart/add/${productID}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("customerToken"),
        },
        body: JSON.stringify({}),
    })

    const data = await res.json();
    return data;
},)

export const removeFromCart = createAsyncThunk('cart/removeFromCart', async (productID) => {

    const res = await fetch(`http://127.0.0.1:5100/api/cart/delete/${productID}`, {
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

export const increaseQuantity = createAsyncThunk('cart/increaseQuantity', async (productID) => {

    const res = await fetch(`http://127.0.0.1:5100/api/cart/increase/${productID}`, {
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

export const decreaseQuantity = createAsyncThunk('cart/decreaseQuantity', async (productID) => {

    const res = await fetch(`http://127.0.0.1:5100/api/cart/decrease/${productID}`, {
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

export const getAllCartProduct = createAsyncThunk('cart/getCartProduct', async () => {

    const res = await fetch("http://127.0.0.1:5100/api/cart/all", {
        method: 'GET',
        headers: {
            'Authorization': localStorage.getItem("customerToken"),
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

        resetNotification: (state, action) => {
            state.message = "";
        }

    }, extraReducers: (builder) => {

        builder
            //ADD TO CART
            .addCase(addToCart.fulfilled, (state, action) => {
                console.log("FULFILLED")
            })
            .addCase(addToCart.pending, (state, action) => {
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
            //REMOVE FROM CART
            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.cartArray = action.payload;
                console.log("FULFILLED")
            })
            .addCase(removeFromCart.pending, (state, action) => {
                console.log("PENDING");
            })
            .addCase(removeFromCart.rejected, (state, action) => {
                console.log("Rejected");
            })
            //INCREASE QUANTITY
            .addCase(increaseQuantity.fulfilled, (state, action) => {
                state.cartArray = action.payload;
                console.log("FULFILLED")
            })
            .addCase(increaseQuantity.pending, (state, action) => {
                console.log("PENDING");
            })
            .addCase(increaseQuantity.rejected, (state, action) => {
                console.log("Rejected");
            })

            //DECREASE QUANTITY
            .addCase(decreaseQuantity.fulfilled, (state, action) => {
                state.cartArray = action.payload;
                console.log("FULFILLED")
            })
            .addCase(decreaseQuantity.pending, (state, action) => {
                console.log("PENDING");
            })
            .addCase(decreaseQuantity.rejected, (state, action) => {
                console.log("Rejected");
            })
    },
})

// Action creators are generated for each case reducer function
export const { } = cartSlice.actions

export default cartSlice.reducer