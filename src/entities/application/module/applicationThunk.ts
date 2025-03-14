import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/storeProvider";
import {headers} from "shared/api/base";
import {IApplication} from "entities/application/module/applicationSchema";


export const fetchApplication = createAsyncThunk<
    IApplication[],
    {id:number|string},
    ThunkConfig<string>
>('applicationSlice/fetchApplication', async ({id}, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `students/student_requests/student_request2/${id}/`,
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
