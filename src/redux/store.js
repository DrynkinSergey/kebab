import { configureStore } from '@reduxjs/toolkit'
import order from './slices/ordersSlice'
export const store = configureStore({
    reducer: {
        order
    },
})