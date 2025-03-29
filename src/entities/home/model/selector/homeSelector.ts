import {StateSchema} from "app/providers/storeProvider";


export const getHomeHeaderItem = (state: StateSchema) => state.homeSlice?.headerItem
export const getHomeItem = (state: StateSchema) => state.homeSlice?.data
export const getHomeTechnical = (state: StateSchema) => state.homeSlice?.technical
export const getHomeProfileDescription = (state: StateSchema) => state.homeSlice?.description
export const getHomeProfileGallery = (state: StateSchema) => state.homeSlice?.gallery
export const getHomeProfileLanding = (state: StateSchema) => state.homeSlice?.landing
export const getHomeProfileAdvantages = (state: StateSchema) => state.homeSlice?.advantages
export const getHomeProfileDegree = (state: StateSchema) => state.homeSlice?.degree