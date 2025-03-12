import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/storeProvider";
import {headers} from "shared/api/base";

interface RegisterProps {
    phone: number,
    password: string
}
export const registerThunk = createAsyncThunk<
    void,
    RegisterProps,
    ThunkConfig<string>
>("registerSlice/registerThunk", async (data, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi
    try {
        const response = await extra.api({
            url: `users/user/crud/`,
            method: "POST",
            body: JSON.stringify(data),
            headers: headers()
        })
        return  response
    }catch (e){
        console.log(e)
        return rejectWithValue('error')
    }
})