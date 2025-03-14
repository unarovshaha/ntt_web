import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    id: undefined,
    loading: false,
    error: undefined
}

const applicationProfileSlice = createSlice({
    name: "applicationProfileSlice",
    initialState,
    reducers: {}
})

export const {reducer: applicationProfileReducer} = applicationProfileSlice
export const {actions: applicationProfileActions} = applicationProfileSlice
