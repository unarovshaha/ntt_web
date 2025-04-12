import {createSlice} from "@reduxjs/toolkit";
import {IApplicationSchema} from "./applicationSchema";
import {fetchApplication, fetchApplicationTypes} from "./applicationThunk";

const initialState: IApplicationSchema = {
    data: [],
    types: [],
    loading: false,
    error: undefined
}

const applicationSlice = createSlice({
    name: "applicationSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchApplication.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchApplication.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchApplication.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
            .addCase(fetchApplicationTypes.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchApplicationTypes.fulfilled, (state, action) => {
                state.types = action.payload
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchApplicationTypes.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
})

export const {reducer: applicationReducer} = applicationSlice
export const {actions: applicationActions} = applicationSlice
