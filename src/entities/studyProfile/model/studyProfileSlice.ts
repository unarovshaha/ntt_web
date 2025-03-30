import {createSlice} from "@reduxjs/toolkit";
import {IStudyProfileSchema} from "./studyProfileSchema";
import {fetchStudyProfileData} from "./studyProfileThunk";

const initialState: IStudyProfileSchema = {
    id: undefined,
    name: undefined,
    grand: undefined,
    education_language: undefined,
    region: undefined,
    shift: undefined,
    price: undefined,
    loading: false,
    error: undefined
}

const studyProfileSlice = createSlice({
    name: "studyProfileSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchStudyProfileData.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchStudyProfileData.fulfilled, (state, action) => {
                state.name = action.payload.name
                state.id = action.payload.id
                state.education_language = action.payload.education_language
                state.region = action.payload.region
                state.shift = action.payload.shift
                state.price = action.payload.price
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchStudyProfileData.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
})

export const {reducer: studyProfileReducer} = studyProfileSlice
export const {actions: studyProfileActions} = studyProfileSlice
