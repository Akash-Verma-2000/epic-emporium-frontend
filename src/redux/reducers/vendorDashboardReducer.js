import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// Async action creator for fetching vendor products
export const getVendorProduct = createAsyncThunk('vendor/product', async () => {

    // Making a GET request to retrieve vendor products from the server
    const res = await fetch("https://epic-emporium-backend.onrender.com/api/product", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("vendorToken"),
        }
    });
    const data = await res.json();
    return data.data;
});

// Async action creator for deleting a product
export const deleteProduct = createAsyncThunk('vendor/delete-product', async (productID) => {

    // Making a DELETE request to delete a product from the server
    const res = await fetch(`https://epic-emporium-backend.onrender.com/api/product/delete-product/${productID}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("vendorToken"),
        }
    });
    return await res.json();
});

// Async action creator for adding a new product
export const addNewProduct = createAsyncThunk('vendor/add-new-product', async (productObj) => {

    // Creating a form data object to send multipart/form-data
    const formData = new FormData();
    formData.append('title', productObj.title);
    formData.append('price', productObj.price);
    formData.append('description', productObj.description);
    formData.append('category', productObj.category);
    formData.append('image', productObj.image);

    // Making a POST request to add a new product to the server
    const res = await fetch(`https://epic-emporium-backend.onrender.com/api/product/add-product`, {
        method: 'POST',
        headers: {
            'Authorization': localStorage.getItem("vendorToken"),
        },
        body: formData,
    });
    return await res.json();
});

// Async action creator for editing a product
export const editProduct = createAsyncThunk('vendor/edit-product', async (productObj) => {

    // Creating a form data object to send multipart/form-data
    const formData = new FormData();
    formData.append('title', productObj.title);
    formData.append('price', productObj.price);
    formData.append('description', productObj.description);
    formData.append('category', productObj.category);
    formData.append('image', productObj.image);

    // Making a PUT request to update a product on the server
    const res = await fetch(`https://epic-emporium-backend.onrender.com/api/product/update-product/${productObj.ID}`, {
        method: 'PUT',
        headers: {
            'Authorization': localStorage.getItem("vendorToken"),
        },
        body: formData,
    });
    const data = await res.json();
    return data.message;
});

// Initial state for the vendor dashboard slice of the Redux store
const initialState = {
    message: "", // Notification message
    vedorProductArray: [],  // Array to hold vendor products
    vedorProductPending: false, // Flag indicating if fetching vendor products is pending
    addNewProductPending: false, // Flag indicating if adding a new product is pending
    editProductPending: false, // Flag indicating if editing a product is pending
}

// Creating a slice of the Redux store for managing the vendor dashboard state
const vendorDashboardSlice = createSlice({
    name: 'vendorDashboard', // Slice name
    initialState,  // Initial state

    reducers: {

        // Action for resetting vendor dashboard notification
        resetVendorDashboardNotification: (state, action) => {
            state.message = "";
        }
    },

    extraReducers: (builder) => {

        builder
            //GET VENDOR PRODUCT
            .addCase(getVendorProduct.fulfilled, (state, action) => {
                state.vedorProductArray = action.payload;
                state.vedorProductPending = false;
            })
            .addCase(getVendorProduct.pending, (state, action) => {
                state.vedorProductPending = true;
            })
            //DELETE PRODUCT
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.vedorProductArray = action.payload.restProducts;
                state.message = action.payload.message;
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.message = action.payload.message;
            })
            //ADD NEW PRODUCT
            .addCase(addNewProduct.fulfilled, (state, action) => {
                state.addNewProductPending = false;
                state.message = action.payload.message;
            })
            .addCase(addNewProduct.pending, (state, action) => {
                state.addNewProductPending = true;
            })
            .addCase(addNewProduct.rejected, (state, action) => {
                state.message = action.payload.message;
            })
            // UPDATE PRODUCT
            .addCase(editProduct.fulfilled, (state, action) => {
                state.editProductPending = false;
                state.message = action.payload;
            })
            .addCase(editProduct.pending, (state, action) => {
                state.editProductPending = true;
            })
            .addCase(editProduct.rejected, (state, action) => {
                state.message = action.payload;
            })

    },


})

export const { resetVendorDashboardNotification } = vendorDashboardSlice.actions;

export default vendorDashboardSlice.reducer