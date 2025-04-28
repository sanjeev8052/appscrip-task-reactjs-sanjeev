import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProducts = createAsyncThunk("/product/get", async (_, thunkApi) => {
    try {
        const product = await axios("https://fakestoreapi.com/products")
        return product.data
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data)
    }
})
const initialState = {
    products: [],
    status: 'idle',
    error: ""
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = 'success'
                state.products = action.payload
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

    }
})


export default productSlice.reducer