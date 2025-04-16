import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/storeProvider";
import {headers, ParamUrl} from "shared/api/base";
import {IComment} from "entities/home/model/schema/homeSchema";

export const fetchStudyMttList = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('studySlice/fetchStudyMttList', async (_, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: ``,
            method: "GET",
            body: null,
            headers: headers()
        })
        if (!response) {
            throw new Error()
        }

        return response.info;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error')
    }
})

export const fetchStudyOtmList = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('studySlice/fetchStudyOtmList', async (_, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: ``,
            method: "GET",
            body: null,
            headers: headers()
        })
        if (!response) {
            throw new Error()
        }

        return response.info;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error')
    }
})

interface ISchoolListProps {
    id?: number | string,
    region?: number[],
    degree?: number[],
    language?: number[],
    price_min?: string,
    price_max?: string,
    shift?: number,
    offset?: number,
    limit?: number
}

export const fetchStudySchoolList = createAsyncThunk<
    [],
    ISchoolListProps,
    ThunkConfig<string>
>('studySlice/fetchStudySchoolList', async (data, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    const {id, region, degree, language, price_min, price_max, shift, offset, limit} = data
    try {
        const response = await extra.api({
            url: `organizations/organization/get/home/?${ParamUrl({
                organization_type: id,
                region, degree, language, price_min, price_max, shift, offset, limit
            })}`,
            method: "GET",
            body: null,
            headers: headers()
        })
        if (!response) {
            throw new Error()
        }

        return response.results;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error')
    }
})

export const fetchStudyDirectionList = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('studySlice/fetchStudyDirectionList', async (_, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: ``,
            method: "GET",
            body: null,
            headers: headers()
        })
        if (!response) {
            throw new Error()
        }

        return response.info;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error')
    }
})

export const fetchStudyGallery = createAsyncThunk<
    void,
    { id: number },
    ThunkConfig<string>
>('studySlice/fetchStudyGallery', async ({id}, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `organizations/organization/get/home/gallary/${id}/`,
            method: "GET",
            body: null,
            headers: headers()
        })
        if (!response) {
            throw new Error()
        }

        return response.info;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error')
    }
})

export const fetchStudyAdvantages = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('studySlice/fetchStudyAdvantages', async (_, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: ``,
            method: "GET",
            body: null,
            headers: headers()
        })
        if (!response) {
            throw new Error()
        }

        return response.info;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error')
    }
})

export const fetchStudyGrant = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('studySlice/fetchStudyGrant', async (_, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: ``,
            method: "GET",
            body: null,
            headers: headers()
        })
        if (!response) {
            throw new Error()
        }

        return response.info;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error')
    }
})


