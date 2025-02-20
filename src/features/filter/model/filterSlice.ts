import {createSlice} from "@reduxjs/toolkit";
import {IFilterSchema} from "./filterSchema";

const initialState: IFilterSchema = {
    direction: undefined,
    locations: [],
    languages: [],
    minSalary: undefined,
    maxSalary: undefined,
    loading: false,
    error: undefined
}

const filterSlice = createSlice({
    name: "filterSlice",
    initialState,
    reducers: {}
})

export const {reducer: filterReducer} = filterSlice
export const {actions: filterActions} = filterSlice
