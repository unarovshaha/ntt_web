import {createSlice} from "@reduxjs/toolkit";
import {
    fetchHomeHeaderItem,
    fetchHomeItem,
    fetchHomeProfile,
    fetchHomeTechnical
} from "entities/home/model/thunk/homeThunk";
import {IHomeSchema} from "../schema/homeSchema";

const initialState: IHomeSchema = {
    headerItem: [] ,
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
                state.landing = action.payload.landing
                state.description = action.payload.description
                state.gallery = action.payload.gallery
                state.error = false
            })
            .addCase(fetchHomeProfile.rejected, state => {
                state.error = true
                state.loading = false
            })


})

export const {reducer: homeReducer} = homeSlice
export const {actions: homeActions} = homeSlice
