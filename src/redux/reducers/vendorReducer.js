import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const vendorSignup = createAsyncThunk('vendor/signup', async () => {

    const res = await fetch("http://127.0.0.1:5100/api/vendor");
    //   const data = await res.json();
    //   return data.data;

},)

const initialState = {
    newVendorObj: {}
}

// Then, handle actions in your reducers:
const vendorSlice = createSlice({
    name: 'vendors',
    initialState,
    reducers: {


    },

    extraReducers: (builder) => {

        builder.addCase(vendorSignup.fulfilled, (state, action) => {

            console.log("FULFILLED")
        })
            .addCase(vendorSignup.pending, (state, action) => {

                console.log("PENDING");
            })
            .addCase(vendorSignup.rejected, (state, action) => {
                console.log("Rejected");
            })
    },


})

export default vendorSlice.reducer