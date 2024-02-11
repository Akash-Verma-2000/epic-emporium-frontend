

import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../reducers/productReducer'
import vendorReducer from '../reducers/vendorReducer'
import customerReducer from '../reducers/customerReducer'
export const store = configureStore({
  reducer: {
    products: productReducer,
    vendors: vendorReducer,
    customers: customerReducer,
  },
})