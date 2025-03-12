import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "entities/login/model/loginThunk";
import { ILoginSchema } from "entities/login/model/loginSchema";


const initialState: ILoginSchema = {
    data: [],
    loading: false,
    error: undefined
}

const loginSlice = createSlice({
    name: "loginSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(loginThunk.fulfilled, (state, action: any) => {
                state.loading = false
                state.error = undefined
            })
            .addCase(loginThunk.rejected, (state) => {
                state.loading = false
                state.error = undefined
            })
    }
})

export const { reducer: loginReducer } = loginSlice
export const { actions: loginActions } = loginSlice