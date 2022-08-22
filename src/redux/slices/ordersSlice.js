import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    orders: [],
    singleOrder: [],
    total: 0,
    sum: 0,
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setTotal(state, action) {
            state.total = action.payload;
        },

        addOrder(state, action) {
            state.total = action.payload.tempTotal

            state.orders = [...state.orders, [{id:action.payload.id},{total: state.total},...state.singleOrder]];
            state.singleOrder = []
            state.sum = state.orders.reduce((sum,obj) => {
                return (obj[1].total) + sum
            }, 0)
            state.total = 0;
        },
        removeOrder (state,action){
             state.orders = state.orders.filter(obj => obj[0].id !== action.payload)
            state.sum = state.orders.reduce((sum,obj) => {
                return (obj[1].total) + sum
            }, 0)
        },
        getCount(state,action){
        },
        addSingleOrder(state, action) {
            state.singleOrder = [...state.singleOrder, action.payload];
        },
        loadOrders: (state, action) => {
            state.orders = action.payload;
            state.sum = state.orders.reduce((sum,obj) => {
                return (obj[1].total) + sum
            }, 0)
        },
    },
})

export const {addOrder, addSingleOrder, setTotal,removeOrder,loadOrders} = orderSlice.actions

export default orderSlice.reducer