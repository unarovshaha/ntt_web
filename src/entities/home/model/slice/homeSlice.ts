import {createSlice} from "@reduxjs/toolkit";
import {fetchHomeItem} from "entities/home/model/thunk/homeThunk";
import {IHomeSchema} from "../schema/homeSchema";

const initialState: IHomeSchema = {
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
}


const homeSlice = createSlice({
    name: "homeSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
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


})

export const {reducer: homeReducer} = homeSlice
export const {actions: homeActions} = homeSlice
