import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/storeProvider";
import {headers} from "shared/api/base";
import {IdentifyProps} from "entities/identify/ui/identify";
import {IUserProfile} from "entities/profile/model/userProfile/userProfileSchema";

export interface UserProfileProps {
    id: any
}

export const userProfileThunk = createAsyncThunk<
    any,
    UserProfileProps,
    ThunkConfig<string>
>("profileSlice/userProfileThunk", async (id, thunkApi) => {
    const {extra, rejectWithValue} = thunkApi
    try {
        const response = await extra.api({
            url: `users/user/get/${id}`,
            method: "GET",
            body: null,
            headers: headers()
        })
        return response
    }catch (e) {
        console.log(e)
        return rejectWithValue("error")
    }
})

export const userProfileUpdateThunk = createAsyncThunk<
    void,
    { id: any, data: IdentifyProps },
    ThunkConfig<string>
>("profileSlice/userProfileUpdateThunk", async (authData, thunkApi) => {
    const {extra, rejectWithValue} = thunkApi
    try {
        const response = await extra.api({
            url: `users/user/crud/${authData.id}/`,
            method: "PATCH",
            body: JSON.stringify(authData.data),
        })
        return response
    }catch (e) {
        console.log(e)
        return rejectWithValue("error")
    }
})

