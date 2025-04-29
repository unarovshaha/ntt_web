import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/storeProvider";
import {headers} from "shared/api/base";

export const fetchApplicationProfile = createAsyncThunk<
    void,
    {id:string},
    ThunkConfig<string>
>('applicationProfileSlice/fetchApplicationProfile', async ({id}, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `students/student_requests/profile/${id}`,
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

