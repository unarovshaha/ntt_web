import React, {useEffect, useState} from 'react';
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
import {NewProfileReadMore} from "entities/newProfile/ui/newProfileReadMore/newProfileReadMore";


const reducers: ReducersList = {
    studyProfileSlice: studyProfileReducer
}

export const StudyProfileNewPage = () => {

    const {id} = useParams()
    const dispatch = useAppDispatch()
    const [items, setItems] = useState<any>()

    console.log(items, 'edede')

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
                        <Route path={"directions"} element={<StudyProfileAnnouncements setItems={setItems}/>}/>
                        <Route path={"directions/readonly"} element={<NewProfileReadMore item={items}/>}/>
                        <Route path={"comments"} element={<StudyComments/>}/>
                    </Routes>
                </div>
            </div>
        </DynamicModuleLoader>
    );
}
