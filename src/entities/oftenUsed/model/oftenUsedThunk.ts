import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/storeProvider";
import {IStudyType} from "./oftenUsedSchema";
import {headers} from "shared/api/base";

export const fetchStudyTypeData = createAsyncThunk<
    IStudyType[],
    void,
    ThunkConfig<string>
>('paymentPacketsSlice/fetchPacketsAnalysis', async (_, thunkApi) => {
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

