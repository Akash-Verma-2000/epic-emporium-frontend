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
        },
        body: JSON.stringify(customerObj)
    })
    const data = await res.json();
    const token = data.token;
    localStorage.setItem("token", token);
    return data.message;

},)

export const sendOTP = createAsyncThunk('customer/sendOTP', async (customerObj) => {

    const res = await fetch("http://127.0.0.1:5100/api/customer/sendOTP", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerObj)
    })

    const data = await res.json();
    return data.message;
},)

export const verifyOTP = createAsyncThunk('customer/verifyOTP', async (customerObj) => {

    const res = await fetch("http://127.0.0.1:5100/api/customer/verifyOTP", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerObj)
    })

    const data = await res.json();
    return data.message;
},)


export const resetPassword = createAsyncThunk('customer/reset-password', async (customerObj) => {

    const res = await fetch("http://127.0.0.1:5100/api/customer/reset-password", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerObj)
    })

    const data = await res.json();
    return data.message;
},)




const initialState = {
    message: "",
    customerSigninPending: false,
    customerSignupPending: false,
    sendOTPPending: false,
    OTPVerificationPending: false,
    passwordResetPending: false
}

// Then, handle actions in your reducers:
const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {


    },

    extraReducers: (builder) => {

        builder.addCase(customerSignup.fulfilled, (state, action) => {
            state.customerSignupPending = false;
            state.message = action.payload;
        })
            .addCase(customerSignup.pending, (state, action) => {
                state.customerSignupPending = true;
                state.message = action.payload;
            })
            .addCase(customerSignup.rejected, (state, action) => {
                state.message = action.payload;
            })
            .addCase(customerSignin.fulfilled, (state, action) => {
                state.message = action.payload;
                state.customerSigninPending = false;
            })
            .addCase(customerSignin.pending, (state, action) => {
                state.customerSigninPending = true;
                state.message = action.payload;
            })
            .addCase(customerSignin.rejected, (state, action) => {
                state.message = action.payload;
            })
            .addCase(sendOTP.fulfilled, (state, action) => {
                state.message = action.payload;
                state.sendOTPPending = false;
            })
            .addCase(sendOTP.pending, (state, action) => {
                state.message = action.payload;
                state.sendOTPPending = true;
            })
            .addCase(sendOTP.rejected, (state, action) => {
                state.message = action.payload;
            })
            .addCase(verifyOTP.fulfilled, (state, action) => {
                state.message = action.payload;
                state.OTPVerificationPending = false;
            })
            .addCase(verifyOTP.pending, (state, action) => {
                state.message = action.payload;
                state.OTPVerificationPending = true;
            })
            .addCase(verifyOTP.rejected, (state, action) => {
                state.message = action.payload;
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.message = action.payload;
                state.passwordResetPending = false;
            })
            .addCase(resetPassword.pending, (state, action) => {
                state.message = action.payload;
                state.passwordResetPending = true;
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.message = action.payload;
            })
    },


})



export default customerSlice.reducer
