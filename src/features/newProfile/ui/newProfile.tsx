import React, {useEffect} from 'react';
import {Route, Routes, useParams} from "react-router";

import {
    NewProfileDirection,
    NewProfileGallery,
    NewProfileHeader,
    NewProfileAbout,
    NewProfileGrant, NewProfilePersonal
} from "entities/newProfile";

import cls from "./newProfile.module.sass";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    fetchHomeProfile,
    fetchHomeProfileDegree,
    fetchHomeProfileItem,
    fetchHomeProfileItemHeader, fetchStudentAcademicYear
} from "entities/home/model/thunk/homeThunk";
import {useSelector} from "react-redux";
import {getHomeProfileItem} from "../../../entities/home/model/selector/homeSelector";



export const NewProfile = () => {
    const dispatch = useAppDispatch()

    const {id} = useParams()

    const dataItem = localStorage.getItem("orgId")

    useEffect(() => {
        if (id) {
            dispatch(fetchHomeProfileItem(Number(id)))
            dispatch(fetchHomeProfile(Number(id)))
            dispatch(fetchHomeProfileItemHeader(Number(id)))

            dispatch(fetchStudentAcademicYear())
        }



    }, [id , ])
    useEffect(() =>{
        if (dataItem) dispatch(fetchHomeProfileDegree(Number(dataItem)))
    } , [dataItem , id])


    // useEffect(() => {
    //     if (dataItem?.id)  dispatch(fetchHomeProfileDegree(Number(dataItem?.organization_type.id)))
    // }, [dataItem])

    return (
        <div className={cls.profile}>
            <NewProfileHeader/>
            <Routes>
                <Route path={"about"} element={<NewProfileAbout/>}/>
                <Route path={"direction"} element={<NewProfileDirection/>}/>
                <Route path={"gallery"} element={<NewProfileGallery/>}/>
                <Route path={"grant"} element={<NewProfileGrant/>}/>
                <Route path={"personal"} element={<NewProfilePersonal/>}/>
            </Routes>
        </div>
    );
}
