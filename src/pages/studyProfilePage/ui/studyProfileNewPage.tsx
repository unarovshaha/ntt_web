import React, {useEffect} from 'react';
import {Outlet, Route, Routes, useParams} from "react-router";

import {
    StudyProfileHeader,
    StudyProfileAbout,
    StudyProfileGrant,
    StudyProfileAnnouncements,
    StudyProfileGallery,
    fetchStudyProfileData,
    StudyProfileInfo,
    studyProfileReducer, getStudyProfileData
} from "entities/studyProfile";

import cls from "./studyProfileNewPage.module.sass";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {useSelector} from "react-redux";
import {StudyComments} from "entities/study";
import {fetchUserComments} from "entities/studyProfile/model/studyProfileThunk";


const reducers: ReducersList = {
    studyProfileSlice: studyProfileReducer
}

export const StudyProfileNewPage = () => {

    const {id} = useParams()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (id){
            dispatch(fetchStudyProfileData({id}))
            dispatch(fetchUserComments(id))
        }
    }, [id])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={cls.newPage}>
                <StudyProfileHeader/>
                <div className={cls.newPage__container}>
                    { window.innerWidth > 700 && <div><StudyProfileInfo/></div>}
                    <Outlet/>
                    <Routes>
                        <Route path={"about"} element={<StudyProfileAbout/>}/>
                        <Route path={"grant"} element={<StudyProfileGrant/>}/>
                        <Route path={"gallery"} element={<StudyProfileGallery/>}/>
                        <Route path={"directions"} element={<StudyProfileAnnouncements/>}/>
                        <Route path={"comments"} element={<StudyComments/>}/>
                    </Routes>
                </div>
            </div>
        </DynamicModuleLoader>
    );
}
