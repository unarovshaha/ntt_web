import {StateSchema} from "app/providers/storeProvider";

export const getDirectionsData = (state: StateSchema) =>
    state.oftenUsedSlice.directions
export const getLocationsData = (state: StateSchema) =>
    state.oftenUsedSlice.locations
export const getDistrictData = (state: StateSchema) =>
    state.oftenUsedSlice.district
export const getStudyTypesData = (state: StateSchema) =>
    state.oftenUsedSlice.studyTypes
export const getLanguagesData = (state: StateSchema) =>
    state.oftenUsedSlice.languages
export const getOrganizationTypes = (state: StateSchema) =>
    state.oftenUsedSlice.organizationTypes
export const getAcademicYear = (state: StateSchema) =>
    state.oftenUsedSlice.academicYear
export const getCurrentAcademicYear = (state: StateSchema) =>
    state.oftenUsedSlice.currentYear
export const getOftenUsedLoading = (state: StateSchema) =>
    state.oftenUsedSlice.loading
export const getOftenUsedError = (state: StateSchema) =>
    state.oftenUsedSlice.error

export const getOftenFields= (state: StateSchema) =>
    state.oftenUsedSlice.fields