import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchRefresh} from "./userThunk";
import {IUserProfile} from "entities/profile/model/userProfile/userProfileSchema";

export interface UserSchema {
    id?: number | string,
    name: string,
    sex: string,
    surname: string
    born_date: string,
    email: string,
    student_id?: number,
    isLoading: boolean
    error: undefined | string
}

const initialState: UserSchema = {
    id: undefined,
    name: "",
    surname: "",
    sex: "",
    born_date: "",
    email: "",
    student_id: undefined,
    isLoading: false,
    error: undefined


}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {

        setAuthData: (state, action: PayloadAction<IUserProfile>) => {
            console.log(action.payload, "action.payload")
            state.id = action.payload.id
            state.sex = action.payload.sex
            state.name = action.payload.name
            state.surname = action.payload.surname
            state.born_date = action.payload.born_date
            state.email = action.payload.email
            state.student_id = action.payload.student_id
        }


    },
    extraReducers: builder =>
        builder
            .addCase(fetchRefresh.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchRefresh.fulfilled, (state) => {
                state.isLoading = false;
                state.error = undefined
            })
            .addCase(fetchRefresh.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

})

export const {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;
