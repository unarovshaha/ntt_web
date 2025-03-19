import {createAsyncThunk} from "@reduxjs/toolkit";
import {headers} from "shared/api/base";
import {ThunkConfig} from "app/providers/storeProvider";
import {IHome} from "../schema/homeSchema"

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

