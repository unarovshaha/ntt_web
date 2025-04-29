import {createSlice} from "@reduxjs/toolkit";
import {IOnlineTestEnter} from "features/onlineTestEnter/model/onlineTestEnter/onlineTestEnterSchema";
import {
    fetchFirstSubject,
    fetchRequiredSubject,
    fetchSecondSubject
} from "features/onlineTestEnter/model/onlineTestEnter/onlineTestEnterThunk";


const initialState : IOnlineTestEnter = {
    loading: false,
    error: false,
    subject: [],
    secondSubject: [],
    requiredSubject: null
}

const onlineTestEnterSlice = createSlice({
    name: "onlineTestEnterSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchFirstSubject.pending , (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(fetchFirstSubject.fulfilled , (state , action) => {
                state.loading = false
                state.subject = action.payload
                state.error = false
            })
            .addCase(fetchFirstSubject.rejected , (state) => {
                state.error = true
                state.loading = false
            })


            .addCase(fetchSecondSubject.pending , (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(fetchSecondSubject.fulfilled , (state , action) => {
                state.loading = false
                state.secondSubject = action.payload
                state.error = false
            })
            .addCase(fetchSecondSubject.rejected , (state) => {
                state.error = true
                state.loading = false
            })
            .addCase(fetchRequiredSubject.pending , (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(fetchRequiredSubject.fulfilled , (state , action) => {
                state.loading = false
                state.requiredSubject = action.payload
                state.error = false
            })
            .addCase(fetchRequiredSubject.rejected , (state) => {
                state.error = true
                state.loading = false
            })
})


export const {reducer: onlineTestEnterReducer} = onlineTestEnterSlice
export const {actions: onlineTestEnterActions} = onlineTestEnterSlice