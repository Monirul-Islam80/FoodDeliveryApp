import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasketList: (state, actions) => {

            state.items = [...state.items, actions.payload]
        },
        removeFromBasketList: (state, actions) => {
            const index = state.items.findIndex((item) => item.id === actions.payload.id);
            let newBasket = [...state.items];
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(`Cann't remove the product ${actions.payload.id} as it's not in the basket list`)
            }
            state.items = newBasket;
        },

    },
})

// Action creators are generated for each case reducer function
export const { addToBasketList, removeFromBasketList } = basketSlice.actions
export const selectBasketList = (state) => state.basket.items;
export const selectBasketListWithId = (state, id) => state.basket.items.filter((item) => item.id == id);
export const selectBasketTotal = state => state.basket.items.reduce((total, item) =>
    (total += item.price), 0
)
export default basketSlice.reducer