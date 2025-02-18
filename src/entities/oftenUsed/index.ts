export {oftenUsedReducer, oftenUsedActions} from "./model/oftenUsedSlice";

export type {IOftenUsedSchema, IStudyType} from "./model/oftenUsedSchema";

export {fetchStudyTypeData} from "./model/oftenUsedThunk";

export {
    getDirectionsData,
    getOftenUsedLoading,
    getOftenUsedError
} from "./model/oftenUsedSelector";
