import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/storeProvider";


export const fetchTestItem = createAsyncThunk<
    any,
    number | string | undefined,
    ThunkConfig<string>
>('takeTestSlice/fetchTestItem', async (id, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `test/test/crud/student-tests/${id}`,
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