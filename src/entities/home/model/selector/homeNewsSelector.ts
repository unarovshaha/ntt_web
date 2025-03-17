import {StateSchema} from "app/providers/storeProvider";

export const getHomeNews = (state: StateSchema) =>
    state.homeNewsSlice?.data
export const getHomeNewsProfileItem = (state: StateSchema) =>
    state.homeNewsSlice?.profileItem