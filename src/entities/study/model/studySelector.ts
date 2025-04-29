import {StateSchema} from "app/providers/storeProvider";

export const getStudyMttList = (state: StateSchema) =>
    state.studySlice?.mttList
export const getStudyOtmList = (state: StateSchema) =>
    state.studySlice?.otmList
export const getStudySchoolList = (state: StateSchema) =>
    state.studySlice?.schoolList
export const getStudyDirectionList = (state: StateSchema) =>
    state.studySlice?.directionList
export const getStudyGallery = (state: StateSchema) =>
    state.studySlice?.gallery
export const getStudyGrant = (state: StateSchema) =>
    state.studySlice?.grant
export const getStudyAdvantages = (state: StateSchema) =>
    state.studySlice?.advantages
export const getStudyLoading = (state: StateSchema) =>
    state.studySlice?.loading
export const getStudyError = (state: StateSchema) =>
    state.studySlice?.error

