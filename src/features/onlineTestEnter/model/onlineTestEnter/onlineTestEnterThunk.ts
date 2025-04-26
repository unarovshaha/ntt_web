import {createAsyncThunk} from "@reduxjs/toolkit";
import {IApplication} from "entities/application";
import {ThunkConfig} from "app/providers/storeProvider";
import {headers, ParamUrl} from "shared/api/base";

export const fetchFirstSubject = createAsyncThunk<
    any[],
    void,
    ThunkConfig<string>
>('onlineTestEnterSlice/fetchLanguage', async (_, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `test/test/get/test_list_home/`,
            method: "GET",
            body: null,
        })
        if (!response) {
            throw new Error()
        }

        return response;
    } catch (e) {

        return rejectWithValue('error')
    }
})



export const fetchSecondSubject = createAsyncThunk<
    any[],
    number,
    ThunkConfig<string>
>('onlineTestEnterSlice/fetchSecondSubject', async (id, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `test/test/get/test_list_home/?id=${id}`,
            method: "GET",
            body: null,
        })
        if (!response) {
            throw new Error()
        }

        return response;
    } catch (e) {

        return rejectWithValue('error')
    }
})


export const fetchRequiredSubject = createAsyncThunk<
    any | null,
    {main_id : number , second_id: number},
    ThunkConfig<string>
>('onlineTestEnterSlice/fetchRequiredSubject', async ({main_id , second_id}, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `test/test/get/test_list_home/`,
            method: "POST",
            body: JSON.stringify({main_id , second_id}),

        })
        if (!response) {
            throw new Error()
        }

        return response;
    } catch (e) {

        return rejectWithValue('error')
    }
})