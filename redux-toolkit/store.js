import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slice/CartSlice'
export const store = configureStore({
    reducer: {
        allCart: cartReducer,
    },
})