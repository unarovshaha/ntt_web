import {StateSchema} from "app/providers/storeProvider";

export const getFilterLocations = (state: StateSchema) =>
    state.filterSlice?.locations
export const getFilterLanguages = (state: StateSchema) =>
    state.filterSlice?.languages
export const getFilterDistrict = (state: StateSchema) =>
    state.filterSlice?.district
export const getFilterDirection = (state: StateSchema) =>
    state.filterSlice?.direction
export const getFilterMinSalary = (state: StateSchema) =>
    state.filterSlice?.minSalary
export const getFilterMaxSalary = (state: StateSchema) =>
    state.filterSlice?.maxSalary
