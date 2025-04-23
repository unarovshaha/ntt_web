import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/storeProvider";
import {headers, ParamUrl} from "shared/api/base";
import {IApplication} from "entities/application/module/applicationSchema";
import {useParams} from "react-router";


export const fetchApplication = createAsyncThunk<
    IApplication[],
    {student_id:number|string, status?: string},
    ThunkConfig<string>
>('applicationSlice/fetchApplication', async ({student_id, status}, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `students/student_requests/list/?${ParamUrl({student_id,status})}`,
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

export const fetchApplicationTypes = createAsyncThunk<
    IApplication[],
    void,
    ThunkConfig<string>
>('applicationSlice/fetchApplicationTypes', async (_, thunkApi) => {
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
