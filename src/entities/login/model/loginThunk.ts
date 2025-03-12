import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/storeProvider";
import {headers} from "shared/api/base";
import {USER_LOCALSTORAGE_REFRESH_TOKEN, USER_LOCALSTORAGE_TOKEN} from "shared/const/localstorage";
import {jwtDecode} from "jwt-decode";

interface LoginProps {
    phone: number,
    password: string
}

interface JWTProps {
    user_id: string
}

export const loginThunk = createAsyncThunk<
    void,
    LoginProps,
    ThunkConfig<string>
>("loginSlice/loginThunk", async (data, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi
    try {
        const response = await extra.api({
            url: `token/`,
            method: "POST",
            body: JSON.stringify(data),
            headers: headers()
        })
        if (!response) {
            throw new Error()
        }
        sessionStorage.setItem(
            USER_LOCALSTORAGE_TOKEN,
            response.access
        )
        sessionStorage.setItem(
            USER_LOCALSTORAGE_REFRESH_TOKEN,
            response.refresh
        )
        if (response)
        {
            const decodeToken: JWTProps = jwtDecode(response.access)
            localStorage.setItem("user_id", String(decodeToken.user_id))
        }

        return  response
    }catch (e){
        console.log(e)
        return rejectWithValue('error')
    }
})