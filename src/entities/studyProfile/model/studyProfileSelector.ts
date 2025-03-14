import {StateSchema} from "app/providers/storeProvider";

export const getStudyProfileId = (state: StateSchema) =>
    state.studyProfileSlice?.id
export const getStudyProfileLanguage = (state: StateSchema) =>
    state.studyProfileSlice?.education_language
export const getStudyProfileName = (state: StateSchema) =>
    state.studyProfileSlice?.name
export const getStudyProfilePrice = (state: StateSchema) =>
    state.studyProfileSlice?.price
export const getStudyProfileRegion = (state: StateSchema) =>
    state.studyProfileSlice?.region
export const getStudyProfileShift = (state: StateSchema) =>
    state.studyProfileSlice?.shift
export const getStudyProfileLoading = (state:StateSchema) =>
    state.studyProfileSlice?.loading
