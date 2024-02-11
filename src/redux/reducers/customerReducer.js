import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const customerSignup = createAsyncThunk('customer/signup', async (customerObj) => {

    const res = await fetch("http://127.0.0.1:5100/api/customer/signup", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customerObj)
    })

   const data= await res.json();
   console.log("DATA=>",data);
   return data;

},)

const initialState = {
    message: "",

}

// Then, handle actions in your reducers:
const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {

        builder.addCase(customerSignup.fulfilled, (state, action) => {
            // console.log("EXTRA REDUCERS =>", action.payload);
            state.message=action.payload;
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


// export const customerSelector = (state) => state.customers.message;

export default customerSlice.reducer
