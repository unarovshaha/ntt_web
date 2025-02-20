import {StateSchema} from "app/providers/storeProvider";

export const getDirectionsData = (state: StateSchema) =>
    state.oftenUsedSlice.directions
export const getLocationsData = (state: StateSchema) =>
    state.oftenUsedSlice.locations
export const getStudyTypesData = (state: StateSchema) =>
    state.oftenUsedSlice.studyTypes
export const getLanguagesData = (state: StateSchema) =>
    state.oftenUsedSlice.languages
export const getOftenUsedLoading = (state: StateSchema) =>
    state.oftenUsedSlice.loading
export const getOftenUsedError = (state: StateSchema) =>
    state.oftenUsedSlice.error