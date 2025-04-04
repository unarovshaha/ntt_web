import {createAsyncThunk} from "@reduxjs/toolkit";
import {headers, headersView} from "shared/api/base";
import {ThunkConfig} from "app/providers/storeProvider";
import {IProfileItemSchema} from "../schema/homeNewsSchema";

interface IFetchProfileItem extends IProfileItemSchema {
    visitor_id: string
}

export const fetchProfileItem = createAsyncThunk<
    IFetchProfileItem,
    { id: string | undefined },
    ThunkConfig<string>
>("homeNewsSlice/fetchProfileItem", async ({id}, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `organizations/news/${id}`,
            method: "GET",
            body: null,
            headers: headersView()
        })
        if (!response) {
            throw new Error()
        }

        return response;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error')
    }
})






