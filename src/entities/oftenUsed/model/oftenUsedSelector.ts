import {StateSchema} from "app/providers/storeProvider";

export const getDirectionsData = (state: StateSchema) =>
    state.oftenUsedSlice.directions
export const getOftenUsedLoading = (state: StateSchema) =>
    state.oftenUsedSlice.loading
export const getOftenUsedError = (state: StateSchema) =>
    state.oftenUsedSlice.error