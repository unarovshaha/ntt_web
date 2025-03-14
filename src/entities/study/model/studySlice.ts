import {createSlice} from "@reduxjs/toolkit";
import {IStudySchema} from "./studySchema";
import {fetchStudyMttList, fetchStudySchoolList} from "entities/study/model/studyThunk";

const initialState: IStudySchema = {
    mttList: [],
    otmList: [],
    schoolList: [],
    directionList: [],
    gallery: [],
    advantages: undefined,
    grant: undefined,
    loading: false,
    error: undefined
}

const studySlice = createSlice({
    name: "studySlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchStudyMttList.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchStudyMttList.fulfilled, (state, action) => {
                // state.mttList = action.payload
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchStudyMttList.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
            .addCase(fetchStudySchoolList.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchStudySchoolList.fulfilled, (state, action) => {
                state.schoolList = action.payload
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchStudySchoolList.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
})

export const {reducer: studyReducer} = studySlice
export const {actions: studyActions} = studySlice
