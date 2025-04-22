import {StateSchema} from "app/providers/storeProvider";


export const getHomeHeaderItem = (state: StateSchema) => state.homeSlice?.headerItem
export const getHomeLoading = (state: StateSchema) => state.homeSlice?.loading
export const getHomeItem = (state: StateSchema) => state.homeSlice?.data
export const getHomeTechnical = (state: StateSchema) => state.homeSlice?.technical
export const getHomeProfileDescription = (state: StateSchema) => state.homeSlice?.description
export const getHomeProfileGallery = (state: StateSchema) => state.homeSlice?.gallery
export const getHomeProfileLanding = (state: StateSchema) => state.homeSlice?.landing
export const getHomeProfileAdvantages = (state: StateSchema) => state.homeSlice?.advantages
export const getHomeProfileDegree = (state: StateSchema) => state.homeSlice?.degree
export const getHomeProfileItem = (state: StateSchema) => state.homeSlice?.organization_profile
export const getHomeProfileItemHeader = (state: StateSchema) => state.homeSlice?.organization_profile_header
export const getHomeProfileDegreeList = (state: StateSchema) => state.homeSlice?.degreeList
export const getHomeProfileYears = (state: StateSchema) => state.homeSlice?.years
export const getFieldsItem = (state: StateSchema) => state.homeSlice?.fields
export const getHomePosters = (state: StateSchema) => state.homeSlice?.posters
export const getSearchResults = (state: StateSchema) => state.homeSlice?.searchResult
export const getSearchComments = (state: StateSchema) => state.homeSlice?.comments