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
    reducers: {
        fetchMinSalary: (state, action) => {
            state.minSalary = action.payload
        },
        fetchMaxSalary: (state, action) => {
            state.maxSalary = action.payload
        },
        fetchLocations: (state, action) => {
            state.locations = action.payload
        },
        fetchLanguages: (state, action) => {
            state.languages = action.payload
        },
        fetchDirection: (state, action) => {
            state.direction = action.payload
        }
    }
})

export const {reducer: filterReducer} = filterSlice
export const {actions: filterActions} = filterSlice
