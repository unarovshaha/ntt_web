import {createSlice} from "@reduxjs/toolkit";
import {INotificationSchema} from "./notificationSchema";
import {fetchNotificationData} from "./notificationThunk";

const initialState: INotificationSchema = {
    data: [],
    loading: false,
    error: undefined
}

const notificationSlice = createSlice({
    name: "notificationSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchNotificationData.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchNotificationData.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchNotificationData.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
})

export const {reducer: notificationReducer} = notificationSlice
export const {actions: notificationActions} = notificationSlice

