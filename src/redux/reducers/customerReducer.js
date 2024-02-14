import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const customerSignup = createAsyncThunk('customer/signup', async (customerObj) => {

    const res = await fetch("http://127.0.0.1:5100/api/customer/signup", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customerObj)
    })
    const data = await res.json();
    return data;

},)

export const customerSignin = createAsyncThunk('customer/signin', async (customerObj) => {

    const res = await fetch("http://127.0.0.1:5100/api/customer/signin", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': "Shinchan Shinchan Pyara Pyara."
        },
        body: JSON.stringify(customerObj)
    })

    const data = await res.json();
    const token = data.token;
    localStorage.setItem("token", token);
    return data.message;

},)




const initialState = {
    message: "",
    customerSigninPending: false,
    customerSignupPending: false,
}

// Then, handle actions in your reducers:
const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {

        vanishMessage: (state, action) => {
            setTimeout(() => {
                state.message = "";
            }, 5000);
        }

    },

    extraReducers: (builder) => {

        builder.addCase(customerSignup.fulfilled, (state, action) => {
            state.customerSignupPending = false;
            state.message = action.payload;
            // console.log("FULFILLED")
        })
            .addCase(customerSignup.pending, (state, action) => {
                state.customerSignupPending = true;
                // console.log("PENDING");
            })
            .addCase(customerSignup.rejected, (state, action) => {

                console.log("Rejected");
            })
            .addCase(customerSignin.fulfilled, (state, action) => {

                state.message = action.payload;
                state.customerSigninPending = false;
                console.log("FULFILLED");
            })
            .addCase(customerSignin.pending, (state, action) => {
                state.customerSigninPending = true;
                console.log("PENDING");
            })
            .addCase(customerSignin.rejected, (state, action) => {
                console.log("REJECTED");
            })
    },


})


export const { vanishMessage } = customerSlice.actions;

export default customerSlice.reducer
