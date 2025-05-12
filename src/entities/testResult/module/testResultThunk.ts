import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/storeProvider";
import {headers} from "shared/api/base";

export const fetchTestResults = createAsyncThunk<
    [],
    {id: number | string},
    ThunkConfig<string>
>('testResultSlice/fetchTestResults', async ({id}, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `test/test/get/test_result_list/?student_id=${id}`,
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