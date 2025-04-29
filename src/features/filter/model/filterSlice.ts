import {createSlice} from "@reduxjs/toolkit";
import {IFilterSchema} from "./filterSchema";

const initialState: IFilterSchema = {
    direction: undefined,
    locations: [],
    languages: [],
    district: [],
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
        clearLocations: (state, action) => {
            state.locations = state.locations.filter(item => item !== action.payload)
        },
        fetchLanguages: (state, action) => {
            state.languages = action.payload
        },
        clearLanguage: (state, action) => {
            state.languages = state.languages.filter(item => item !== action.payload)
        },
        fetchDirection: (state, action) => {
            state.direction = action.payload
        },
        fetchDistrict: (state, action) => {
            state.district = action.payload
        },
        clearDistrict: (state, action) => {
            state.district = state.district.filter(item => item !== action.payload)
        },
        clearFilter: (state) => {
            state.direction = undefined
            state.maxSalary = undefined
            state.minSalary = undefined
            state.languages = []
            state.locations = []
        }
    }
})

export const {reducer: filterReducer} = filterSlice
export const {actions: filterActions} = filterSlice
