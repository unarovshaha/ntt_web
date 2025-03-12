import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loading: false,
    error: undefined
}

const applicationSlice = createSlice({
    name: "applicationSlice",
    initialState,
    reducers: {}
})

export const {reducer: applicationReducer} = applicationSlice
export const {actions: applicationActions} = applicationSlice
