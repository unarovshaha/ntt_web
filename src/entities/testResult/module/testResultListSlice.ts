import {createSlice} from "@reduxjs/toolkit";
import {ITestResultSchema} from "./testResultSchema";

const initialState: ITestResultSchema = {
    data: [],
    loading: false,
    error: undefined
}

const testResultSlice = createSlice({
    name: "testResultSlice",
    initialState,
    reducers: {}
})

export const {reducer: testResultReducer} = testResultSlice
export const {actions: testResultActions} = testResultSlice


