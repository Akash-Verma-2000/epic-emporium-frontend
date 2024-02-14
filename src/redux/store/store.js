

import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../reducers/productReducer'
import vendorReducer from '../reducers/vendorReducer'
import customerReducer from '../reducers/customerReducer'
import cartReducer from '../reducers/cartReducer'
export const store = configureStore({
  reducer: {
    products: productReducer,
    vendors: vendorReducer,
    customers: customerReducer,
    cart: cartReducer,
  },
})