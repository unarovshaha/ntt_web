import {createSlice} from "@reduxjs/toolkit";
import {ISchoolSchema} from "./schoolSchema";

const initialState: ISchoolSchema = {
    schools: [],
    loading: false,
    error: undefined
}

const schoolSlice = createSlice({
    name: "schoolSlice",
    initialState,
    reducers: {}
})

export const {reducer: schoolReducer} = schoolSlice
export const {actions: schoolActions} = schoolSlice
