export type {IStudyProfileSchema} from "./model/studyProfileSchema";
export {studyProfileReducer, studyProfileActions} from "./model/studyProfileSlice";
export {fetchStudyProfileData} from "./model/studyProfileThunk";
export {
    getStudyProfileGrand,
    getStudyProfileShift,
    getStudyProfileRegion,
    getStudyProfilePrice,
    getStudyProfileLanguage,
    getStudyProfileId,
    getStudyProfileLoading,
    getStudyProfileName
} from "./model/studyProfileSelector"