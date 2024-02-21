import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// Async action creator for customer signup
export const customerSignup = createAsyncThunk('customer/signup', async (customerObj) => {

    // Making a POST request to the server to register a customer
    const res = await fetch("https://epic-emporium-backend.onrender.com/api/customer/signup", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customerObj)
    })
    const data = await res.json();
    return data;
},)

// Async action creator for customer signin
export const customerSignin = createAsyncThunk('customer/signin', async (customerObj) => {

    // Making a POST request to the server to authenticate a customer
    const res = await fetch("https://epic-emporium-backend.onrender.com/api/customer/signin", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerObj)
    })
    const data = await res.json();
    const token = data.token;
    if (token) {
        localStorage.setItem("customerToken", token);
    }
    return data.message;
},)

// Async action creator for sending OTP to the customer
export const sendOTP = createAsyncThunk('customer/sendOTP', async (customerObj) => {

    // Making a POST request to the server to send OTP
    const res = await fetch("https://epic-emporium-backend.onrender.com/api/customer/sendOTP", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerObj)
    })
    const data = await res.json();
    return data.message;
},)

// Async action creator for verifying OTP provided by the customer
export const verifyOTP = createAsyncThunk('customer/verifyOTP', async (customerObj) => {

    // Making a POST request to the server to verify OTP
    const res = await fetch("https://epic-emporium-backend.onrender.com/api/customer/verifyOTP", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerObj)
    })
    const data = await res.json();
    return data.message;
},)

// Async action creator for resetting customer password
export const resetPassword = createAsyncThunk('customer/reset-password', async (customerObj) => {

    // Making a POST request to the server to reset password
    const res = await fetch("https://epic-emporium-backend.onrender.com/api/customer/reset-password", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerObj)
    })
    const data = await res.json();
    return data.message;
},)


// Initial state for the customer slice of the Redux store
const initialState = {

    message: "", // Notification message
    customerSigninPending: false, // Flag indicating if customer signin is pending
    customerSignupPending: false,  // Flag indicating if customer signup is pending
    sendOTPPending: false,  // Flag indicating if sending OTP is pending
    OTPVerificationPending: false, // Flag indicating if OTP verification is pending
    passwordResetPending: false, // Flag indicating if password reset is pending
    isCustomerLoggedIn: localStorage.getItem("customerToken") // Flag indicating if customer is logged in
}

// Creating a slice of the Redux store for managing the customer state
const customerSlice = createSlice({
    name: 'customers',  // Slice name
    initialState, // Initial state

    reducers: {

        // Action for customer logout
        customerLogout: (state, action) => {
            localStorage.removeItem("customerToken");
            state.isCustomerLoggedIn = false;
        },

        // Action for resetting customer notification
        resetCustomerNotification: (state, action) => {
            state.message = "";
        }
    },

    extraReducers: (builder) => {

        //CUSTOMER REGISTER
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

            //CUSTOMER LOGIN
            .addCase(customerSignin.fulfilled, (state, action) => {
                state.isCustomerLoggedIn = localStorage.getItem("customerToken");
                state.message = action.payload;
                state.customerSigninPending = false;
            })
            .addCase(customerSignin.pending, (state, action) => {
                state.message = action.payload;
                state.customerSigninPending = true;
            })
            .addCase(customerSignin.rejected, (state, action) => {
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

            //OTP VERIFICATION
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

            // RESET PASSWORD
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

export const { customerLogout, resetCustomerNotification } = customerSlice.actions;

export default customerSlice.reducer
