import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/storeProvider";
import {IList, IYearList} from "./oftenUsedSchema";
import {headers} from "shared/api/base";

export const fetchDirectionsData = createAsyncThunk<
    IList[],
    {id:string},
    ThunkConfig<string>
>('oftenUsedSlice/fetchDirectionsData', async ({id}, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `shift/get/list/${id}/`,
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

export const fetchLocationsData = createAsyncThunk<
    IList[],
    void,
    ThunkConfig<string>
>('oftenUsedSlice/fetchLocationsData', async (_, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `region/get`,
            method: "GET",
            body: null,
        })
        if (!response) {
            throw new Error()
        }

        return response.results;
    } catch (e) {

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
            url: `education_language/get/`,
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

        return response.results;
    } catch (e) {

        return rejectWithValue('error')
    }
})

export const fetchOrganizationTypesData = createAsyncThunk<
    IList[],
    void,
    ThunkConfig<string>
>('oftenUsedSlice/fetchOrganizationTypesData', async (_, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `organizations/organization_type/get/list/`,
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

export const fetchAcademicYear = createAsyncThunk<
    IYearList[],
    void,
    ThunkConfig<string>
>('oftenUsedSlice/fetchAcademicYear', async (_, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `students/acedemic_year/`,
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
export const fetchDistrictThunk = createAsyncThunk<
    [],
    number[],
    ThunkConfig<string>
>('oftenUsedSlice/fetchDistrict', async (id, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `region/get/list_district/?region_id=${id}`,
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

export const fetchOftenUsedFieldsItem = createAsyncThunk<
    any[],
    string | number | undefined,
    ThunkConfig<string>
>("oftenUsedSlice/fetchOftenUsedFieldsItem", async (menuID, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `organization_fields/get/organization-fields2/${menuID}/`,
            method: "GET",
            body: null,
            // headers: headers()
        })
        if (!response) {
            throw new Error()
        }

        return response;
    } catch (e) {

        return rejectWithValue('error')
    }
})
