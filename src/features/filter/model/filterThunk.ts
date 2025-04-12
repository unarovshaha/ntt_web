import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/storeProvider";
import {headers} from "shared/api/base";

export interface IMttFilterProps {

}

export const fetchMttFilter = createAsyncThunk<
    void,
    IMttFilterProps,
    ThunkConfig<string>
>('filterSlice/fetchMttFilter', async (authData, thunkApi) => {
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

