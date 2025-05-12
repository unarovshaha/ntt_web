export {TestResultList} from "./ui/testResultList/testResultList";

export type {ITestResultSchema} from "./module/testResultSchema";
export {testResultReducer, testResultActions} from "./module/testResultSlice";

export {
    getTestResultData,
    getTestResultError,
    getTestResultLoading
} from "./module/testResultSelector";

export {fetchTestResults} from "./module/testResultThunk";

