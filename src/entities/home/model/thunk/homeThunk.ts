import {createAsyncThunk} from "@reduxjs/toolkit";
import {headers} from "shared/api/base";
import {ThunkConfig} from "app/providers/storeProvider";
import {HeaderItem, IHome, IHomeNews, Organization} from "../schema/homeSchema"


export const fetchHomeHeaderItem = createAsyncThunk<
    HeaderItem[],
    void,
    ThunkConfig<string>
>("homeSlice/fetchHomeHeaderItem", async (_, thunkApi) => {
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
        console.log(e);
        return rejectWithValue('error')
    }
})


export const fetchHomeItem = createAsyncThunk<
    IHome[],
    void,
    ThunkConfig<string>
>("homeSlice/fetchHomeItem", async (_, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `organizations/organization_landing_page/get/`,
            method: "GET",
            body: null,
            // headers: headers()
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

export const fetchHomeTechnical = createAsyncThunk<
    any,
    { priceMin: number, priceMax: number, stipendiya: boolean, grand: boolean, organizationId: number | string | null },
    ThunkConfig<string>
>("homeSlice/fetchHomeTechnical", async ({priceMax, priceMin, grand, stipendiya, organizationId}, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `organizations/organization/get/home/?organization_type=${organizationId}&price_min=${priceMin}&price_max=${priceMax}${grand ? `&grant=${grand}` : ""}${stipendiya ? `&stipendiya=${stipendiya}` : ""}`,
            method: "GET",
            body: null,
            // headers: headers()
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


export const fetchHomeProfile = createAsyncThunk<
    any,
    number,
    ThunkConfig<string>
>("homeSlice/fetchHomeProfile", async (id, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `organizations/organization/get/home/${id}/`,
            method: "GET",
            body: null,
            // headers: headers()
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




export const fetchHomeProfileItem = createAsyncThunk<
    Organization[],
    number,
    ThunkConfig<string>
>("homeSlice/fetchHomeProfileItem", async (id, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `organizations/organization/get/${id}/`,
            method: "GET",
            body: null,
            // headers: headers()
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

export const fetchHomeProfileItemHeader = createAsyncThunk<
    any[],
    number,
    ThunkConfig<string>
    >("homeSlice/fetchHomeProfileItemHeader", async (id, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `organizations/organization_user/get/${id}/`,
            method: "GET",
            body: null,
            // headers: headers()
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


export const fetchHomeProfileDegree = createAsyncThunk<
    any[],
    number,
    ThunkConfig<string>
    >("homeSlice/fetchHomeProfileDegree", async (id, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `organization-degrees/organization-degree/get/list/${id}/`,
            method: "GET",
            body: null,
            // headers: headers()
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
export const fetchHomeProfileDegreeItem = createAsyncThunk<
    any[],
    {id: number | string | undefined , yearId: number | undefined, degreeId : number | string | undefined},
    ThunkConfig<string>
    >("homeSlice/fetchHomeProfileDegreeItem", async ({id , yearId , degreeId}, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `organizations/organization_landing_page/get/?organization_id=${id}&year_id=${yearId}&degree_id=${degreeId}`,
            method: "GET",
            body: null,
            // headers: headers()
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


export const fetchStudentAcademicYear = createAsyncThunk<
    any[],
    void,
    ThunkConfig<string>
    >("homeSlice/fetchStudentAcademicYear", async (_, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `students/acedemic_year/`,
            method: "GET",
            body: null,
            // headers: headers()
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




export const fetchNews = createAsyncThunk<
    IHomeNews[],
    void,
    ThunkConfig<string>
>("homeNewsSlice/fetchNews", async (_, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `organizations/news/`,
            method: "GET",
            body: null,
            // headers: headers()
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