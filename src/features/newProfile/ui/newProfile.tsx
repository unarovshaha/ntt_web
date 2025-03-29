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
import {fetchHomeProfile} from "entities/home/model/thunk/homeThunk";


export const NewProfile = () => {
    const dispatch = useAppDispatch()

    const {id} = useParams()
    useEffect(() => {
        if (id) dispatch(fetchHomeProfile(Number(id)))
    }, [])




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
