import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getVendorProduct = createAsyncThunk('vendor/product', async () => {
    const res = await fetch("http://127.0.0.1:5100/api/product", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("vendorToken"),
        }
    });
    const data = await res.json();

    return data.data;
});

export const deleteProduct = createAsyncThunk('vendor/delete-product', async (productID) => {
    const res = await fetch(`http://127.0.0.1:5100/api/product/delete-product/${productID}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("vendorToken"),
        }
    });
    return await res.json();

});


export const addNewProduct = createAsyncThunk('vendor/add-new-product', async (productObj) => {
    const formData = new FormData();
    formData.append('title', productObj.title);
    formData.append('price', productObj.price);
    formData.append('description', productObj.description);
    formData.append('category', productObj.category);
    formData.append('image', productObj.image);

    const res = await fetch(`http://127.0.0.1:5100/api/product/add-product`, {
        method: 'POST',
        headers: {
            'Authorization': localStorage.getItem("vendorToken"),
        },
        body: formData,
    });

    return await res.json();

});

export const editProduct = createAsyncThunk('vendor/edit-product', async (productObj) => {

    const formData = new FormData();
    formData.append('title', productObj.title);
    formData.append('price', productObj.price);
    formData.append('description', productObj.description);
    formData.append('category', productObj.category);
    formData.append('image', productObj.image);

    const res = await fetch(`http://127.0.0.1:5100/api/product/update-product/${productObj.ID}`, {
        method: 'PUT',
        headers: {
            'Authorization': localStorage.getItem("vendorToken"),
        },
        body: formData,
    });

    const data = await res.json();

    return data.message;

});




const initialState = {
    message: "",
    vedorProductArray: [],
    vedorProductPending: false,
    addNewProductPending: false,
    editProductPending: false,
}

// Then, handle actions in your reducers:
const vendorDashboardSlice = createSlice({
    name: 'vendorDashboard',
    initialState,
    reducers: {
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
            .addCase(getVendorProduct.rejected, (state, action) => {
                console.log("Rejected");
            })
            //DELETE PRODUCT
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.vedorProductArray = action.payload.restProducts;
                state.message = action.payload.message;
            })
            .addCase(deleteProduct.pending, (state, action) => {
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
                console.log("Fulfilled");
            })
            .addCase(editProduct.pending, (state, action) => {
                state.editProductPending = true;
                console.log("pending");
            })
            .addCase(editProduct.rejected, (state, action) => {
                state.message = action.payload;
                console.log("Rejected");
            })

    },


})

export const { resetVendorDashboardNotification  } = vendorDashboardSlice.actions;

export default vendorDashboardSlice.reducer