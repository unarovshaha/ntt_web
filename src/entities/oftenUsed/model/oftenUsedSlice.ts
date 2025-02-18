import {createSlice} from "@reduxjs/toolkit";
import {IOftenUsedSchema} from "./oftenUsedSchema";
import {fetchStudyTypeData} from "./oftenUsedThunk";

const initialState: IOftenUsedSchema = {
    directions: [
        {id: 1, name: "Kichik"},
        {id: 2, name: "O’rta"},
        {id: 3, name: "Maktabgacha"},
    ],
    loading: false,
    error: undefined
}

const oftenUsedSlice = createSlice({
    name: "oftenUsedSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchStudyTypeData.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchStudyTypeData.fulfilled, (state, action) => {
                state.directions = action.payload
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchStudyTypeData.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
})

export const {reducer: oftenUsedReducer} = oftenUsedSlice
export const {actions: oftenUsedActions} = oftenUsedSlice
