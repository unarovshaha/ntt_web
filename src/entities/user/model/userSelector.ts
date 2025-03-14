import {StateSchema} from "app/providers/storeProvider";


export const getUserName = (state: StateSchema) =>
    state.user.name
export const getUserSurname = (state: StateSchema) =>
    state.user.surname
export const getUserId = (state: StateSchema) =>
    state.user.id
export const getUserLoading = (state: StateSchema) =>
    state.user.isLoading
export const getUserError = (state: StateSchema) =>
    state.user.error