import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    orders: [],
    singleOrder: [],
    total: 0,
    summForDay: 0,
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setTotal(state, action) {
            state.total = action.payload;
        },
        setSummForDay(state, action) {
            state.summForDay += action.payload;
        },
        addOrder(state, action) {
            state.total = action.payload
            state.orders = [...state.orders, [...state.singleOrder, {total: state.total}]];
            state.singleOrder = []
            state.total = 0;
        },
        addSingleOrder(state, action) {
            state.singleOrder = [...state.singleOrder, action.payload];
        }
    },
})

export const {addOrder, addSingleOrder, setTotal, setSummForDay} = orderSlice.actions

export default orderSlice.reducer