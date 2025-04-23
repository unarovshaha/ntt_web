import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/storeProvider";
import {headers} from "shared/api/base";
import {IStudyProfile} from "./studyProfileSchema";
import {IList, IYearList} from "entities/oftenUsed/model/oftenUsedSchema";
import {IComment} from "entities/home/model/schema/homeSchema";

export const fetchStudyProfileLandingData = createAsyncThunk<
    IStudyProfile,
    {id:string},
    ThunkConfig<string>
>('studyProfileSlice/fetchStudyProfileLandingData', async ({id}, thunkApi) => {
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

        return rejectWithValue('error')
    }
})

export const fetchStudyProfileData = createAsyncThunk<
    IStudyProfile,
    {id:string},
    ThunkConfig<string>
>('studyProfileSlice/fetchStudyProfileData', async ({id}, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `organizations/organization/get/${id}/`,
            method: "GET",
            body: null,
            headers: headers()
        })
        if (!response) {
            throw new Error()
        }

        return response;
    } catch (e) {

        return rejectWithValue('error')
    }
})

export const fetchStudyProfileGallery = createAsyncThunk<
    any[],
    {id:string},
    ThunkConfig<string>
>('studyProfileSlice/fetchStudyProfileGallery', async ({id}, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `organizations/organization_gallery/get/?organization_id=${id}`,
            method: "GET",
            body: null,
            headers: headers()
        })
        if (!response) {
            throw new Error()
        }

        return response.results;
    } catch (e) {

        return rejectWithValue('error')
    }
})

export const fetchStudyProfileAnnouncements = createAsyncThunk<
    any[],
    {id:string, secondId: number,selectedDegree:number},
    ThunkConfig<string>
>('studyProfileSlice/fetchStudyProfileAnnouncements', async ({id, secondId, selectedDegree}, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `organizations/organization_landing_page/get/?organization_id=${id}&year_id=${secondId}&degree_id=${selectedDegree}`,
            // url: `organizations/organization_landing_page/get/?organization_id=${id}&year_id=${seasonId}&degree_id=${selectedDegree}`,
            method: "GET",
            body: null,
            headers: headers()
        })
        if (!response) {
            throw new Error()
        }

        return response.results;
    } catch (e) {

        return rejectWithValue('error')
    }
})

export const fetchStudyProfileAdmin = createAsyncThunk<
    any,
    {id:string},
    ThunkConfig<string>
>('studyProfileSlice/fetchStudyProfileAdmin', async ({id}, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `organizations/organization_user/get/${id}/`,
            method: "GET",
            body: null,
            headers: headers()
        })
        if (!response) {
            throw new Error()
        }

        return response;
    } catch (e) {

        return rejectWithValue('error')
    }
})



export const fetchStudyProfileDegree = createAsyncThunk<
    IList[],
    {id: string},
    ThunkConfig<string>
>('studyProfileSlice/fetchStudyProfileDegree', async ({id}, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `organization-degrees/organization-degree/get/list/${id}/`,
            method: "GET",
            body: null,
            headers: headers()
        })
        if (!response) {
            throw new Error()
        }

        return response.results;
    } catch (e) {

        return rejectWithValue('error')
    }
})

export const fetchUserComments = createAsyncThunk<
    IComment[],
    string,
    ThunkConfig<string>
>("studySlice/fetchUserComments", async (id, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `comments/list/?organization_id=${id}`,
            method: "GET",
            body: null,
            // headers: headers()
        })
        if (!response) {
            throw new Error()
        }

        return response.results;
    } catch (e) {

        return rejectWithValue('error')
    }
})