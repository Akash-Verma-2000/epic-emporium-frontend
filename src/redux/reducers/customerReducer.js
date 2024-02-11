import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const customerSignup = createAsyncThunk('customer/signup', async () => {

    const res = await fetch("http://127.0.0.1:5100/api/customer");
    //   const data = await res.json();
    //   return data.data;

},)

const initialState = {
    newCustomerObj: {}
}

// Then, handle actions in your reducers:
const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {


    },

    extraReducers: (builder) => {

        builder.addCase(customerSignup.fulfilled, (state, action) => {

            console.log("FULFILLED")
        })
            .addCase(customerSignup.pending, (state, action) => {

                console.log("PENDING");
            })
            .addCase(customerSignup.rejected, (state, action) => {
                console.log("Rejected");
            })
    },


})

export default customerSlice.reducer
