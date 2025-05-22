import {createSlice} from "@reduxjs/toolkit";
import {IOftenUsedSchema} from "./oftenUsedSchema";
import {
    fetchAcademicYear,
    fetchDirectionsData, fetchDistrictThunk,
    fetchLanguagesData,
    fetchLocationsData, fetchOftenUsedFieldsItem, fetchOrganizationTypesData,
    fetchStudyTypesData
} from "./oftenUsedThunk";

const initialState: IOftenUsedSchema = {
    directions: [
        {id: 1, name: "Kichik"},
        {id: 2, name: "O’rta"},
        {id: 3, name: "Maktabgacha"},
    ],
    locations: [
        {id: 1, name: "Sherbek"},
        {id: 2, name: "Saypi"},
        {id: 3, name: "Sardorchik"},
    ],
    studyTypes: [
        {id: 1, name: "Ertalab"},
        {id: 2, name: "Obed"},
        {id: 3, name: "Kechki"},
    ],
    languages: [
        {id: 1, name: "Ertalab"},
        {id: 2, name: "Obed"},
        {id: 3, name: "Kechki"},
    ],
    district: [],
    organizationTypes: [],
    academicYear: [],
    fields: [],
    currentYear: undefined,
    loading: false,
    error: undefined
}

const oftenUsedSlice = createSlice({
    name: "oftenUsedSlice",
    initialState,
    reducers: {
        getCurrentYear: (state, action) => {
            state.currentYear = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(fetchDirectionsData.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchDirectionsData.fulfilled, (state, action) => {
                state.directions = action.payload
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchDirectionsData.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
            .addCase(fetchLocationsData.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchLocationsData.fulfilled, (state, action) => {
                state.locations = action.payload
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchLocationsData.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
            .addCase(fetchLanguagesData.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchLanguagesData.fulfilled, (state, action) => {
                state.languages = action.payload
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchLanguagesData.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
            .addCase(fetchStudyTypesData.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchStudyTypesData.fulfilled, (state, action) => {
                state.studyTypes = action.payload
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchStudyTypesData.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
            .addCase(fetchOrganizationTypesData.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchOrganizationTypesData.fulfilled, (state, action) => {
                state.organizationTypes = action.payload
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchOrganizationTypesData.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
            .addCase(fetchAcademicYear.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchAcademicYear.fulfilled, (state, action) => {
                state.academicYear = action.payload
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchAcademicYear.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
            .addCase(fetchDistrictThunk.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchDistrictThunk.fulfilled, (state, action) => {
                state.district = action.payload
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchDistrictThunk.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })


            .addCase(fetchOftenUsedFieldsItem.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchOftenUsedFieldsItem.fulfilled, (state, action) => {
                state.fields = action.payload
                state.loading = false
                state.error = undefined
            })
            .addCase(fetchOftenUsedFieldsItem.rejected, (state) => {
                state.loading = false
                state.error = "error"
            })
})

export const {reducer: oftenUsedReducer} = oftenUsedSlice
export const {actions: oftenUsedActions} = oftenUsedSlice
