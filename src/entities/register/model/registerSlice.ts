import {createSlice} from "@reduxjs/toolkit";
import {IRegisterSchema} from "./registerSchema";
import {registerThunk} from "entities/register/model/registerThunk";

const initialState: IRegisterSchema = {
    data: [],
    loading: false,
    error: undefined
}

const registerSlice  = createSlice({
    name: "registerSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(registerThunk.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(registerThunk.fulfilled, (state) => {
                state.loading = false
                state.error = "error"
            })
            .addCase(registerThunk.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
    }
})

export const {reducer: registerReducer} = registerSlice
export const {actions: registerActions} = registerSlice