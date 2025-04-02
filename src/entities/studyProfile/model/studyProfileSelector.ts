import {StateSchema} from "app/providers/storeProvider";

export const getStudyProfileData = (state: StateSchema) =>
    state.studyProfileSlice?.data
export const getStudyProfileAnnouncements = (state: StateSchema) =>
    state.studyProfileSlice?.announcements
export const getStudyProfileGallery = (state: StateSchema) =>
    state.studyProfileSlice?.gallery
export const getStudyProfileUserData = (state: StateSchema) =>
    state.studyProfileSlice?.userData
export const getStudyProfileUserImage = (state: StateSchema) =>
    state.studyProfileSlice?.userDataImage
export const getStudyProfileDegree = (state: StateSchema) =>
    state.studyProfileSlice?.degree
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
export const getStudyProfileGrand = (state: StateSchema) =>
    state.studyProfileSlice?.grand
