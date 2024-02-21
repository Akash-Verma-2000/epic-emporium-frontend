import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// Async action creator for vendor sign-in
export const vendorSignin = createAsyncThunk('vendor/signin', async (customerObj) => {

    // Making a POST request to sign in the vendor
    const res = await fetch("https://epic-emporium-backend.onrender.com/api/vendor/signin", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customerObj)
    })
    const data = await res.json();
    const token = data.token;

    // If authentication is successful, save the vendor token in local storage
    if (token) {
        localStorage.setItem("vendorToken", token);
    }
    return data.message;
},)

// Async action creator for vendor sign-up
export const vendorSignup = createAsyncThunk('vendor/signup', async (vendorObj) => {

    // Making a POST request to sign up the vendor
    const res = await fetch("https://epic-emporium-backend.onrender.com/api/vendor/signup", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(vendorObj)
    })
    const data = await res.json();
    return data;
},)

// Async action creator for sending OTP to the vendor
export const sendOTP = createAsyncThunk('customer/sendOTP', async (vendorObj) => {

    // Making a POST request to send OTP to the vendor
    const res = await fetch("https://epic-emporium-backend.onrender.com/api/vendor/sendOTP", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(vendorObj)
    })
    const data = await res.json();
    return data.message;
},)

// Async action creator for verifying OTP sent to the vendor
export const verifyOTP = createAsyncThunk('customer/verifyOTP', async (vendorObj) => {

    // Making a POST request to verify OTP sent to the vendor
    const res = await fetch("https://epic-emporium-backend.onrender.com/api/vendor/verifyOTP", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(vendorObj)
    })
    const data = await res.json();
    return data.message;
},)

// Async action creator for resetting the vendor's password
export const resetPassword = createAsyncThunk('customer/reset-password', async (vendorObj) => {

    // Making a POST request to reset the vendor's password
    const res = await fetch("https://epic-emporium-backend.onrender.com/api/vendor/reset-password", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(vendorObj)
    })
    const data = await res.json();
    return data.message;
},)

// Initial state for the vendor slice of the Redux store
const initialState = {

    vendorSigninPending: false,  // Flag indicating if vendor sign-in is pending
    vendorSignupPending: false,  // Flag indicating if vendor sign-up is pending
    sendOTPPending: false, // Flag indicating if sending OTP is pending
    OTPVerificationPending: false, // Flag indicating if OTP verification is pending
    passwordResetPending: false, // Flag indicating if password reset is pending
    isVendorLoggedIn: localStorage.getItem("vendorToken"), // Flag indicating if the vendor is logged in
    message: ""  // Notification message

}

// Creating a slice of the Redux store for managing vendor-related state
const vendorSlice = createSlice({

    name: 'vendors', // Slice name
    initialState, // Initial state

    reducers: {

        // Action for vendor logout
        vendorLogout: (state, action) => {
            localStorage.removeItem("vendorToken");
            state.isVendorLoggedIn = false;
        },

        // Action for resetting vendor notification
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
            })
            .addCase(vendorSignin.pending, (state, action) => {
                state.message = action.payload;
                state.vendorSigninPending = true;
            })
            .addCase(vendorSignin.rejected, (state, action) => {
                state.message = action.payload;
            })
            //REGISTER
            .addCase(vendorSignup.fulfilled, (state, action) => {
                state.message = action.payload;
                state.vendorSignupPending = false;
            })
            .addCase(vendorSignup.pending, (state, action) => {
                state.message = action.payload;
                state.vendorSignupPending = true;
            })
            .addCase(vendorSignup.rejected, (state, action) => {
                state.message = action.payload;
            })
            //SEND OTP
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
            //VERIFY OTP
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
            //RESET PASSWORD
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

export const { vendorLogout, resetVendorNotification } = vendorSlice.actions;

export default vendorSlice.reducer