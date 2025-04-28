import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/storeProvider";

export const fetchFinalAnswer = createAsyncThunk<
    any,
    number | string | undefined,
    ThunkConfig<string>
>('finalAnswerSlice/fetchFinalAnswer', async (id, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `test/test/crud/check/?id=${id}`,
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