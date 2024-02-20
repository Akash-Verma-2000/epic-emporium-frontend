import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const vendorSignin = createAsyncThunk('vendor/signin', async (customerObj) => {

    const res = await fetch("http://127.0.0.1:5100/api/vendor/signin", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customerObj)
    })
    const data = await res.json();

    const token = data.token;
    if (token) {
        localStorage.setItem("vendorToken", token);
    }
    return data.message;
},)

export const vendorSignup = createAsyncThunk('vendor/signup', async (vendorObj) => {

    const res = await fetch("http://127.0.0.1:5100/api/vendor/signup", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(vendorObj)
    })
    const data = await res.json();
    return data;


},)

export const sendOTP = createAsyncThunk('customer/sendOTP', async (vendorObj) => {

    const res = await fetch("http://127.0.0.1:5100/api/vendor/sendOTP", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(vendorObj)
    })

    const data = await res.json();
    return data.message;
},)

export const verifyOTP = createAsyncThunk('customer/verifyOTP', async (vendorObj) => {

    const res = await fetch("http://127.0.0.1:5100/api/vendor/verifyOTP", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(vendorObj)
    })

    const data = await res.json();
    return data.message;
},)


export const resetPassword = createAsyncThunk('customer/reset-password', async (vendorObj) => {

    const res = await fetch("http://127.0.0.1:5100/api/vendor/reset-password", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(vendorObj)
    })

    const data = await res.json();
    return data.message;
},)

const initialState = {
    vendorSigninPending: false,
    vendorSignupPending: false,
    sendOTPPending: false,
    OTPVerificationPending: false,
    passwordResetPending: false,
    isVendorLoggedIn: localStorage.getItem("vendorToken"),
    message: ""

}

// Then, handle actions in your reducers:
const vendorSlice = createSlice({
    name: 'vendors',
    initialState,
    reducers: {

        vendorLogout: (state, action) => {
            localStorage.removeItem("vendorToken");
            state.isVendorLoggedIn = false;
        },

        resetVendorNotification: (state, action) => {
            state.message = "";
        }

    },

    extraReducers: (builder) => {
        //LOGIN
        builder
            .addCase(vendorSignin.fulfilled, (state, action) => {
                state.message = action.payload;
                state.isVendorLoggedIn = localStorage.getItem("vendorToken");
                state.vendorSigninPending = false;
                console.log("FULFILLED")
            })
            .addCase(vendorSignin.pending, (state, action) => {
                state.message = action.payload;
                state.vendorSigninPending = true;
                console.log("PENDING");
            })
            .addCase(vendorSignin.rejected, (state, action) => {
                state.message = action.payload;
                console.log("Rejected");
            })
            //REGISTER
            .addCase(vendorSignup.fulfilled, (state, action) => {
                state.message = action.payload;
                state.vendorSignupPending = false;
                console.log("FULFILLED")
            })
            .addCase(vendorSignup.pending, (state, action) => {
                state.message = action.payload;
                state.vendorSignupPending = true;
                console.log("PENDING");
            })
            .addCase(vendorSignup.rejected, (state, action) => {
                state.message = action.payload;
                console.log("Rejected");
            })
            //SEND OTP
            .addCase(sendOTP.fulfilled, (state, action) => {
                state.message = action.payload;
                state.sendOTPPending = false;
                console.log("FULFILLED")
            })
            .addCase(sendOTP.pending, (state, action) => {
                state.message = action.payload;
                state.sendOTPPending = true;
                console.log("PENDING");
            })
            .addCase(sendOTP.rejected, (state, action) => {
                state.message = action.payload;
                console.log("Rejected");
            })
            //VERIFY OTP
            .addCase(verifyOTP.fulfilled, (state, action) => {
                state.message = action.payload;
                state.OTPVerificationPending = false;
                console.log("FULFILLED")
            })
            .addCase(verifyOTP.pending, (state, action) => {
                state.message = action.payload;
                state.OTPVerificationPending = true;
                console.log("PENDING");
            })
            .addCase(verifyOTP.rejected, (state, action) => {
                state.message = action.payload;
                console.log("Rejected");
            })
            //RESET PASSWORD
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.message = action.payload;
                state.passwordResetPending = false;
                console.log("FULFILLED")
            })
            .addCase(resetPassword.pending, (state, action) => {
                state.message = action.payload;
                state.passwordResetPending = true;
                console.log("PENDING");
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.message = action.payload;
                console.log("Rejected");
            })

    },


})

export const { vendorLogout, resetVendorNotification } = vendorSlice.actions;

export default vendorSlice.reducer