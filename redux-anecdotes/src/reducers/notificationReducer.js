import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const notificationReducer = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification(state, action) {
            return action.payload;
        },
        removeNotification(state, action) {
            return "";
        }
    }
})

export default notificationReducer.reducer;
export const { setNotification, removeNotification } = notificationReducer.actions;

export const setNotificationFn = (notification, seconds) => {
    return async dispatch => {
        dispatch(setNotification(notification));
        setInterval(() => {
            dispatch(removeNotification());
        }, `${seconds}000`.valueOf());
    }
}