import {createSlice} from "@reduxjs/toolkit";
import {ITestResultSchema} from "./testResultSchema";
import {fetchTestResults} from "./testResultThunk";

const initialState: ITestResultSchema = {
    data: [],
    loading: false,
    error: undefined
}

const testResultSlice = createSlice({
    name: "testResultSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchTestResults.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchTestResults.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchTestResults.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
})

export const {reducer: testResultReducer} = testResultSlice
export const {actions: testResultActions} = testResultSlice


