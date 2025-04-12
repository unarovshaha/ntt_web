import {createSlice} from "@reduxjs/toolkit";
import {
    fetchFieldsItem,
    fetchHomeHeaderItem,
    fetchHomeItem,
    fetchHomeProfile,
    fetchHomeProfileDegree,
    fetchHomeProfileDegreeItem,
    fetchHomeProfileItem,
    fetchHomeProfileItemHeader,
    fetchHomeTechnical, fetchOrganizationsPosters, fetchSearchOrganizations, fetchStudentAcademicYear
} from "entities/home/model/thunk/homeThunk";
import {IHomeSchema} from "../schema/homeSchema";

const initialState: IHomeSchema = {
    headerItem: [],
    loading: false,
    error: false,
    data: [
        {
            name: "Buxgalteriya hisobi va moliya",
            region: "Toshkent Viloyati",
            desc: " Oliy ta’lim muassasasi bo‘lib, talabalar ilmiy va kasbiy bilimlarni chuqurlashtirishadi. ta’lim\n" +
                "                    beradi.",
            direction: "18 ta yo’nalish bor"
        }
    ],
    technical: [],
    description: [],
    advantages: [],
    gallery: [],
    degree: [],
    landing: [],
    organization_profile: undefined,
    organization_profile_header: undefined,
    degreeList: [],
    years: [],
    fields: [],
    posters: [],
    searchResult: []
}


const homeSlice = createSlice({
    name: "homeSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(fetchHomeHeaderItem.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(fetchHomeHeaderItem.fulfilled, (state, action) => {
                state.loading = false
                state.headerItem = action.payload
                state.error = false
            })
            .addCase(fetchHomeHeaderItem.rejected, state => {
                state.error = true
                state.loading = false
            })

            .addCase(fetchFieldsItem.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(fetchFieldsItem.fulfilled, (state, action) => {
                state.loading = false
                state.fields = action.payload
                state.error = false
            })
            .addCase(fetchOrganizationsPosters.pending, state => {
                state.loading = true
                state.error = false
            })

            .addCase(fetchFieldsItem.rejected, state => {
                state.error = true
                state.loading = false
            })
            .addCase(fetchOrganizationsPosters.fulfilled, (state, action) => {
                state.loading = false
                //@ts-ignore
                state.posters = action.payload.landing
                console.log(state.posters, 'dadada')
                state.error = false
            })
            .addCase(fetchOrganizationsPosters.rejected, state => {
                state.error = true
                state.loading = false
            })

            .addCase(fetchHomeItem.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(fetchHomeItem.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
                state.error = false
            })
            .addCase(fetchHomeItem.rejected, state => {
                state.error = true
                state.loading = false
            })
            .addCase(fetchSearchOrganizations.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(fetchSearchOrganizations.fulfilled, (state, action) => {
                state.loading = false
                state.searchResult = action.payload
                state.error = false
            })
            .addCase(fetchSearchOrganizations.rejected, state => {
                state.error = true
                state.loading = false
            })


            .addCase(fetchHomeTechnical.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(fetchHomeTechnical.fulfilled, (state, action) => {
                state.loading = false
                state.technical = action.payload
                state.error = false
            })
            .addCase(fetchHomeTechnical.rejected, state => {
                state.error = true
                state.loading = false
            })


            .addCase(fetchHomeProfile.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(fetchHomeProfile.fulfilled, (state, action) => {
                state.loading = false
                state.degree = action.payload.degree
                state.advantages = action.payload.advantages
                state.description = action.payload.description
                state.gallery = action.payload.gallery
                state.error = false
            })
            .addCase(fetchHomeProfile.rejected, state => {
                state.error = true
                state.loading = false
            })

            .addCase(fetchHomeProfileItem.pending, state => {
                state.loading = true
                state.error = false
            })


            .addCase(fetchHomeProfileItem.fulfilled, (state, action) => {
                state.loading = false

                // @ts-ignore
                state.organization_profile = action.payload
                state.error = false
            })
            .addCase(fetchHomeProfileItem.rejected, state => {
                state.error = true
                state.loading = false
            })


            .addCase(fetchHomeProfileItemHeader.pending, state => {
                state.loading = true
                state.error = false
            })


            .addCase(fetchHomeProfileItemHeader.fulfilled, (state, action) => {
                state.loading = false

                // @ts-ignore
                state.organization_profile_header = action.payload.results[0]
                state.error = false
            })
            .addCase(fetchHomeProfileItemHeader.rejected, state => {
                state.error = true
                state.loading = false
            })


            .addCase(fetchHomeProfileDegree.pending, state => {
                state.loading = true
                state.error = false
            })


            .addCase(fetchHomeProfileDegree.fulfilled, (state, action) => {
                state.loading = false


                state.degreeList = action.payload
                state.error = false
            })
            .addCase(fetchHomeProfileDegree.rejected, state => {
                state.error = true
                state.loading = false
            })


            .addCase(fetchHomeProfileDegreeItem.pending, state => {
                state.loading = true
                state.error = false
            })


            .addCase(fetchHomeProfileDegreeItem.fulfilled, (state, action) => {
                state.loading = false


                state.landing = action.payload
                state.error = false
            })
            .addCase(fetchHomeProfileDegreeItem.rejected, state => {
                state.error = true
                state.loading = false
            })

            .addCase(fetchStudentAcademicYear.pending, state => {
                state.error = true
                state.loading = false
            })

            .addCase(fetchStudentAcademicYear.fulfilled, (state, action) => {
                state.loading = false


                state.years = action.payload
                state.error = false
            })
            .addCase(fetchStudentAcademicYear.rejected, state => {
                state.error = true
                state.loading = false
            })

})

export const {reducer: homeReducer} = homeSlice
export const {actions: homeActions} = homeSlice
