import {createSlice} from "@reduxjs/toolkit";
import {IRegisterSchema} from "./registerSchema";

const initialState: IRegisterSchema = {
    data: [],
    loading: false,
    error: undefined
}

const registerSlice  = createSlice({
    name: "registerSlice",
    initialState,
    reducers: {}
})

export const {reducer: registerReducer} = registerSlice
export const {actions: registerActions} = registerSlice