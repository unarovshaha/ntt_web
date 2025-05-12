import {StateSchema} from "app/providers/storeProvider";

export const getTestResultData = (state: StateSchema) =>
    state.testResultSlice?.data
export const getTestResultLoading = (state: StateSchema) =>
    state.testResultSlice?.loading
export const getTestResultError = (state: StateSchema) =>
    state.testResultSlice?.error
