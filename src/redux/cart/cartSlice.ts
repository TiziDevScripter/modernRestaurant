import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Product {
    id: number,
    title: string,
    image: string,
    imageType?: string
}

const initialState: Product[] | [] = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            return ([
                ...state,
                action.payload
            ])
        }
    }
})

export default cartSlice.reducer
export const { addProduct } = cartSlice.actions
