export type {IStudyProfileSchema} from "./model/studyProfileSchema";
export {studyProfileReducer, studyProfileActions} from "./model/studyProfileSlice";
export {
    fetchStudyProfileData,
    fetchStudyProfileLandingData,
    fetchStudyProfileGallery
} from "./model/studyProfileThunk";
export {
    getStudyProfileGrand,
    getStudyProfileShift,
    getStudyProfileRegion,
    getStudyProfilePrice,
    getStudyProfileLanguage,
    getStudyProfileId,
    getStudyProfileLoading,
    getStudyProfileName,
    getStudyProfileData,
    getStudyProfileGallery,
    getStudyProfileUserData,
    getStudyProfileUserImage,
    getStudyProfileAnnouncements
} from "./model/studyProfileSelector";

export {StudyProfileHeader} from "./ui/studyProfileHeader/studyProfileHeader";
export {StudyProfileAbout} from "./ui/studyProfileAbout/studyProfileAbout";
export {StudyProfileGrant} from "./ui/studyProfileGrant/studyProfileGrant";
export {StudyProfileAnnouncements} from "./ui/studyProfileAnnouncements/studyProfileAnnouncements";
export {StudyProfileGallery} from "./ui/studyProfileGallery/studyProfileGallery";
export {StudyProfileInfo} from "./ui/studyProfileInfo/studyProfileInfo";

