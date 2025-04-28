import {StateSchema} from "app/providers/storeProvider";

export const getOnlineTestList = (state: StateSchema) => state.onlineTestEnterSlice?.requiredSubject
export const getOnlineTestSubject = (state: StateSchema) => state.onlineTestEnterSlice?.subject
export const getOnlineTestSecondSubject = (state: StateSchema) => state.onlineTestEnterSlice?.secondSubject