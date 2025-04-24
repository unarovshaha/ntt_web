import {StateSchema} from "app/providers/storeProvider";

export const getUserData = (state: StateSchema) => state.userProfileSlice?.data
export const getUserLoading = (state: StateSchema) => state.userProfileSlice?.loading