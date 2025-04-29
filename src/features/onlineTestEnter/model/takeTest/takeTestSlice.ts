import {createSlice} from "@reduxjs/toolkit";

import {ITakeTestInterface} from "features/onlineTestEnter/model/takeTest/takeTestSchema";
import {fetchTestItem} from "features/onlineTestEnter/model/takeTest/takeTestThunk";


const initialState : ITakeTestInterface = {
    loading: false,
    error: false,
    testItem: null
}

const takeTestSlice = createSlice({
    name: "takeTestSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchTestItem.pending , state => {
                state.loading = true
                state.error = false
            })
            .addCase(fetchTestItem.fulfilled , (state, action) => {
                state.loading = false
                state.error = false
                state.testItem = action.payload
            })
            .addCase(fetchTestItem.rejected , state => {
                state.loading = false
                state.error = true
            })

})


export const {reducer: takeTestReducer} = takeTestSlice
export const {actions: takeTestAction} = takeTestSlice