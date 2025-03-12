import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/storeProvider";
import {headers} from "shared/api/base";
import {IStudyProfile} from "./studyProfileSchema";

export const fetchStudyProfileData = createAsyncThunk<
    IStudyProfile,
    {id:string},
    ThunkConfig<string>
>('studyProfileSlice/fetchStudyProfileData', async ({id}, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `organizations/organization/get/home/landing/${id}/`,
            method: "GET",
            body: null,
            headers: headers()
        })
        if (!response) {
            throw new Error()
        }

        return response;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error')
    }
})
