
import {createSlice} from "@reduxjs/toolkit";
import {fetchNews, fetchProfileItem} from "entities/home/model/thunk/newsThunk";
import {IHomeNewsSchema} from "../schema/homeNewsSchema";

const initialState: IHomeNewsSchema = {
    loading: false,
    error: false,
    data: [],
    profileItem: {desc_json: {text: ""}, landing: []}
}


const homeNewsSlice = createSlice({
    name: "homeNewsSlice",
    initialState,
    reducers: {
        onAddHomeNews: (state, action) => {
            state.data = [...state.data, action.payload]
        },
        onEditHomeNews: (state, action) => {
            state.data = state.data.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload.data
                }
                return item
            })
        },
        onDeleteHomeNews: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload)
        }
    },
    extraReducers: builder =>
        builder
            .addCase(fetchNews.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
                state.error = false
            })
            .addCase(fetchNews.rejected, state => {
                state.error = true
                state.loading = false
            })

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
