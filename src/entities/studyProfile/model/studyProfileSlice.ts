import {createSlice} from "@reduxjs/toolkit";
import {IStudyProfileSchema} from "./studyProfileSchema";
import {
    fetchStudyProfileAdmin,
    fetchStudyProfileAnnouncements,
    fetchStudyProfileData, fetchStudyProfileDegree,
    fetchStudyProfileGallery,
    fetchStudyProfileLandingData, fetchUserComments
} from "./studyProfileThunk";


const initialState: IStudyProfileSchema = {
    data: undefined,
    announcements: [],
    gallery: [],
    degree: [],
    userData: null,
    userDataImage: null,
    id: undefined,
    name: undefined,
    grand: undefined,
    education_language: undefined,
    region: undefined,
    shift: undefined,
    price: undefined,
    loading: false,
    error: undefined,
    comments: []
}

const studyProfileSlice = createSlice({
    name: "studyProfileSlice",
    initialState,
    reducers: {
        onAddComment : (state , action) => {
            state.comments = [...state.comments , action.payload]
        }
    },
    extraReducers: builder =>
        builder
            .addCase(fetchStudyProfileLandingData.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchStudyProfileLandingData.fulfilled, (state, action) => {
                state.name = action.payload.name
                state.id = action.payload.id
                state.education_language = action.payload.education_language
                state.region = action.payload.region
                state.shift = action.payload.shift
                state.price = action.payload.price
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchStudyProfileLandingData.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
            .addCase(fetchStudyProfileData.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchStudyProfileData.fulfilled, (state, action) => {
                console.log(action.payload, "action.payload")
                state.data = action.payload
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchStudyProfileData.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
            .addCase(fetchStudyProfileGallery.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchStudyProfileGallery.fulfilled, (state, action) => {
                state.gallery = action.payload
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchStudyProfileGallery.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
            .addCase(fetchStudyProfileAnnouncements.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchStudyProfileAnnouncements.fulfilled, (state, action) => {
                state.announcements = action.payload
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchStudyProfileAnnouncements.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
            .addCase(fetchStudyProfileAdmin.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchStudyProfileAdmin.fulfilled, (state, action) => {
                state.userData = action.payload?.results[0]
                state.userDataImage = action.payload?.results[0]?.user?.file
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchStudyProfileAdmin.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
            .addCase(fetchStudyProfileDegree.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchStudyProfileDegree.fulfilled, (state, action) => {
                state.degree = action.payload
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchStudyProfileDegree.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })


            .addCase(fetchUserComments.pending, (state) => {
                state.error = "error"
                state.loading = false
            })
            .addCase(fetchUserComments.fulfilled, (state, action) => {
                state.comments = action.payload
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchUserComments.rejected, (state) => {
                state.error = "error"
                state.loading = false
            })


})

export const {reducer: studyProfileReducer} = studyProfileSlice
export const {actions: studyProfileActions} = studyProfileSlice
