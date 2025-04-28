import { configureStore } from '@reduxjs/toolkit'
import product from './Features/Product/productSlice'
const store = configureStore({
    reducer: {
        product: product
    }
})

export default store