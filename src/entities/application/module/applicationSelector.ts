import {StateSchema} from "app/providers/storeProvider";

export const getApplicationData = (state: StateSchema) =>
    state.applicationSlice?.data
export const getApplicationLoading = (state: StateSchema) =>
    state.applicationSlice?.loading
export const getApplicationError = (state: StateSchema) =>
    state.applicationSlice?.error
