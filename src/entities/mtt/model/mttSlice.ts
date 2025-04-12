import {createSlice} from "@reduxjs/toolkit";
import {IMttSchema} from "entities/mtt/model/mttSchema";

const initialState: IMttSchema = {
    mtt: [],
    loading: false,
    error: undefined
}

const mttSlice = createSlice({
    name: "mttSlice",
    initialState,
    reducers: {}
})

export const {reducer: mttReducer} = mttSlice
export const {actions: mttActions} = mttSlice
