import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/storeProvider";
import {IList} from "./oftenUsedSchema";
import {headers} from "shared/api/base";

export const fetchDirectionsData = createAsyncThunk<
    IList[],
    void,
    ThunkConfig<string>
>('oftenUsedSlice/fetchDirectionsData', async (_, thunkApi) => {
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

export const fetchLocationsData = createAsyncThunk<
    IList[],
    void,
    ThunkConfig<string>
>('oftenUsedSlice/fetchLocationsData', async (_, thunkApi) => {
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
export const fetchLanguagesData = createAsyncThunk<
    IList[],
    void,
    ThunkConfig<string>
>('oftenUsedSlice/fetchLanguagesData', async (_, thunkApi) => {
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
export const fetchStudyTypesData = createAsyncThunk<
    IList[],
    void,
    ThunkConfig<string>
>('oftenUsedSlice/fetchStudyTypesData', async (_, thunkApi) => {
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

