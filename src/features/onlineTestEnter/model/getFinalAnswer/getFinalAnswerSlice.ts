import {createSlice} from "@reduxjs/toolkit";
import {fetchFinalAnswer} from "features/onlineTestEnter/model/getFinalAnswer/getFinalAnswerThunk";
import {GetFinalAnswerSchema} from "features/onlineTestEnter/model/getFinalAnswer/getFinalAnswerSchema";


const initialState : GetFinalAnswerSchema = {
    loading: false,
    error: false,
    data: undefined
}

export const finalAnswerSlice = createSlice({
    name: "finalAnswerSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchFinalAnswer.pending , state => {
                state.error = false
                state.loading = true
            })
            .addCase(fetchFinalAnswer.fulfilled , (state, action) => {
                state.error = false
                state.loading = false
                state.data = action.payload
            })

            .addCase(fetchFinalAnswer.rejected , state => {
                state.error = true
                state.loading = false
            })
})

export const {actions : finalAnswerAction} = finalAnswerSlice
export const {reducer : finalAnswerReducer} = finalAnswerSlice