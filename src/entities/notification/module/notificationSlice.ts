import {createSlice} from "@reduxjs/toolkit";
import {INotificationSchema} from "./notificationSchema";
import {fetchNotificationData, fetchNotificationProfile} from "./notificationThunk";

const initialState: INotificationSchema = {
    data: [],
    profileItem: [],
    loading: false,
    error: undefined
}

const notificationSlice = createSlice({
    name: "notificationSlice",
    initialState,
    reducers: {
        onGetNotification: (state, action) => {
            state.data = action.payload.results
        },
        onGetNotificationProfile: (state, action) => {
            state.profileItem = action.payload.results
        }
    },
    extraReducers: builder =>
        builder
            .addCase(fetchNotificationData.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchNotificationData.fulfilled, (state, action) => {
                // @ts-ignore
                state.data = action.payload
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchNotificationData.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })


            .addCase(fetchNotificationProfile.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchNotificationProfile.fulfilled, (state, action) => {
                // @ts-ignore
                state.profileItem = action.payload
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchNotificationProfile.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
})

export const {reducer: notificationReducer} = notificationSlice
export const {actions: notificationActions} = notificationSlice

