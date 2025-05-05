import React, {useEffect, useState} from 'react';
import {Route, Routes, useParams} from "react-router";

import {

    NewProfileGallery,
    NewProfileHeader,
    NewProfileAbout,
    NewProfileGrant, NewProfilePersonal, NewProfileComments, NewProfileDirection
} from "entities/newProfile";

import cls from "./newProfile.module.sass";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    fetchHomeProfile,
    fetchHomeProfileDegree,
    fetchHomeProfileItem,
    fetchHomeProfileItemHeader, fetchStudentAcademicYear, fetchUserComment
} from "entities/home/model/thunk/homeThunk";
import {NewProfileReadMore} from "entities/newProfile/ui/newProfileReadMore/newProfileReadMore";


export const NewProfile = () => {
    const dispatch = useAppDispatch()
    const {id} = useParams()
    const [items, setItems] = useState<any>()

    const dataItem = localStorage.getItem("orgId")

    useEffect(() => {
        if (id) {
            dispatch(fetchHomeProfileItem(Number(id)))
            dispatch(fetchHomeProfile(Number(id)))
            dispatch(fetchHomeProfileItemHeader(Number(id)))
            dispatch(fetchUserComment(Number(id)))

            dispatch(fetchStudentAcademicYear())
        }


    }, [id,])
    useEffect(() => {
        if (dataItem) dispatch(fetchHomeProfileDegree(Number(dataItem)))
    }, [dataItem, id])


    // useEffect(() => {
    //     if (dataItem?.id)  dispatch(fetchHomeProfileDegree(Number(dataItem?.organization_type.id)))
    // }, [dataItem])

    return (
        <div className={cls.profile}>
            <NewProfileHeader/>
            <Routes>
                <Route path={"about"} element={<NewProfileAbout/>}/>
                <Route path={"direction"} element={<NewProfileDirection setItems={setItems}/>}/>
                <Route path={"direction/readonly"} element={<NewProfileReadMore item={items}/>}/>
                <Route path={"gallery"} element={<NewProfileGallery/>}/>
                <Route path={"grant"} element={<NewProfileGrant/>}/>
                <Route path={"personal"} element={<NewProfilePersonal/>}/>
                <Route path={"comments"} element={<NewProfileComments/>}/>
            </Routes>
        </div>
    );
}
