export {StudyHeader} from "./ui/studyHeader/studyHeader";
export {StudyMttList} from "./ui/studyMttList/studyMttList";
export {StudyOtmList} from "./ui/studyOtmList/studyOtmList";
export {StudySchoolList} from "./ui/studySchoolList/studySchoolList";
export {StudyDirectionList} from "./ui/studyDirectionList/studyDirectionList";

export type {IStudySchema, IMttList} from "./model/studySchema";

export {studyReducer, studyActions} from "./model/studySlice";

export {
    getStudyMttList,
    getStudyOtmList,
    getStudyDirectionList,
    getStudyAdvantages,
    getStudyError,
    getStudyGallery,
    getStudyGrant,
    getStudyLoading,
    getStudySchoolList
} from "./model/studySelector";

export {
    fetchStudyAdvantages,
    fetchStudySchoolList,
    fetchStudyDirectionList,
    fetchStudyGallery,
    fetchStudyGrant,
    fetchStudyMttList,
    fetchStudyOtmList
} from "./model/studyThunk";

