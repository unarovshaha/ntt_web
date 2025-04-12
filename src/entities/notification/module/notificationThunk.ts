import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/storeProvider";
import {headers} from "shared/api/base";
import {notificationActions} from "entities/notification/module/notificationSlice";

export const fetchNotificationData = createAsyncThunk<
    void,
    number,
    ThunkConfig<string>
>('notificationSlice/fetchNotificationData', async (id, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `students/notification/get_organization_student/${id}`,
            method: "GET",
            body: null,
            headers: headers()
        })
        if (!response) {
            throw new Error()
        }

        dispatch(notificationActions.onGetNotification(response))
        return response.results;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error')
    }
})


export const fetchNotificationProfile = createAsyncThunk<
    void,
    { id: string , student_id: string },
    ThunkConfig<string>
>('notificationSlice/fetchNotificationProfile', async ({id , student_id}, thunkApi) => {
    const {extra, dispatch, rejectWithValue} = thunkApi;
    try {
        const response = await extra.api({
            url: `students/notification/get_organization/?type=student&student_id=${student_id}&organization_id=${id}`,
            method: "GET",
            body: null,
            headers: headers()
        })
        if (!response) {
            throw new Error()
        }

        dispatch(notificationActions.onGetNotificationProfile(response))
        return response.results;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error')
    }
})
