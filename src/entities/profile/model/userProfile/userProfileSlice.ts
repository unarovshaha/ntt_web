import {createSlice} from "@reduxjs/toolkit";
import {IUserProfileSchema} from "entities/profile/model/userProfile/userProfileSchema";
import {userProfileThunk} from "entities/profile/model/userProfile/userProfileThunk";
import {userProfileUpdateThunk} from "entities/profile/model/userProfile/userProfileThunk";

const initialState: IUserProfileSchema = {
    data: {
        id: "",
        name: "",
        surname: "",
        passport_seria: "",
        sex: "",
        born_date: "",
        born_address: "",
        indefikatsiya_pin: "",
        phone_extra: "",
        email: "",
    },
    loading: false,
    error: undefined
}

const userProfileSlice = createSlice({
    name: "userProfileSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(userProfileThunk.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(userProfileThunk.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
                state.error = undefined
            })
            .addCase(userProfileThunk.rejected, (state) => {
                state.loading = false
                state.error = undefined
            })
            .addCase(userProfileUpdateThunk.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(userProfileUpdateThunk.fulfilled, (state) => {
                state.loading = false
                state.error = undefined
            })
            .addCase(userProfileUpdateThunk.rejected, (state) => {
                state.loading = false
                state.error = undefined
            })
    }
})

export const {reducer: userProfileReducer} = userProfileSlice
export const {actions: userProfileActions} = userProfileSlice