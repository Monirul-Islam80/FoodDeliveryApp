import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    restaurant: {
        id: null,
        imgurl: null,
        title: null,
        rating: null,
        genre: null,
        address: null,
        shortDesc: null,
        dishes: null,

    },

}

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurant: (state, actions) => {
            state.restaurant = actions.payload;
        }

    },
})

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;
export const selectRestaurant = (state) => state.restaurant.restaurant;
export default restaurantSlice.reducer;