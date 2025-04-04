import {createSlice} from "@reduxjs/toolkit";
import {fetchProfileItem} from "entities/home/model/thunk/newsThunk";
import {IHomeNewsSchema} from "../schema/homeNewsSchema";

const initialState: IHomeNewsSchema = {
    loading: false,
    error: false,

    profileItem: {desc_json: {text: ""}, landing: [] , img: ""}
}


const homeNewsSlice = createSlice({
    name: "homeNewsSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder


            .addCase(fetchProfileItem.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(fetchProfileItem.fulfilled, (state, action) => {
                state.loading = false
                state.profileItem = action.payload
                localStorage.setItem("visitorId", action?.payload?.visitor_id)
                state.error = false
            })
            .addCase(fetchProfileItem.rejected, state => {
                state.error = true
                state.loading = false
            })

})

export const {reducer: homeNewsReducer} = homeNewsSlice
export const {actions: homeNewsActions} = homeNewsSlice