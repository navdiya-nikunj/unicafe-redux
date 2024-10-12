import { createSlice } from "@reduxjs/toolkit";

const initialState = ""
const filterReducer = createSlice({
    name: 'Filter',
    initialState,
    reducers: {
        setFilter(state, action) {
            return action.payload
        }
    }
})

export default filterReducer.reducer;
export const { setFilter } = filterReducer.actions;