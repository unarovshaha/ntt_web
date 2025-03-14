import {StateSchema} from "app/providers/storeProvider";


export const getNotificationData = (state:StateSchema) =>
    state.notificationSlice?.data
export const getNotificationLoading = (state:StateSchema) =>
    state.notificationSlice?.loading
export const getNotificationError = (state:StateSchema) =>
    state.notificationSlice?.error
