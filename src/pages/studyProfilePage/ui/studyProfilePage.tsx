import React, {useEffect} from 'react';
import {Route, Routes, useParams} from "react-router";

import {fetchStudyProfileData, studyProfileReducer} from "entities/studyProfile";
import {DirectionCard} from "shared/lib/components/directionCard/directionCard";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {Button} from "shared/ui/button";
import {headers, useHttp} from "shared/api/base";

import cls from "./studyProfilePage.module.sass";
import {Loader} from "shared/ui/loader";
import {useSelector} from "react-redux";
import {getStudyProfileLoading} from "entities/studyProfile/model/studyProfileSelector";
import {getUserId} from "entities/user";
import {alertAction} from "entities/alert";
import {StudyHeader} from "entities/study";
import {SchoolHeader} from "entities/school";
import {fetchStudyProfileLandingData} from "entities/studyProfile/model/studyProfileThunk";

const reducers: ReducersList = {
    studyProfileSlice: studyProfileReducer
}

export const StudyProfilePage = () => {

    const userId = useSelector(getUserId)
    const loading = useSelector(getStudyProfileLoading)
    // const data = useSelector
    const dispatch = useAppDispatch()
    const {id} = useParams()
    const {request} = useHttp()

    useEffect(() => {
        if (id)
            dispatch(fetchStudyProfileLandingData({id}))
    }, [id])


    const onCreate = () => {
        request({
            url: `students/student_requests/create/`,
            method: "POST",
            body: JSON.stringify({landing: id, user: userId}),
            headers: headers()
        })
            .then(res => {
                dispatch(alertAction.onAddAlertOptions({
                    type: "success",
                    status: true,
                    msg: res.msg
                }))
            })
    }

    if (loading) return <Loader/>

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div>
                <SchoolHeader/>
                <Routes>
                    {/*<Route element={}/>*/}
                </Routes>
            </div>
            <div className={cls.profile}>
                <DirectionCard/>
                <div className={cls.profile__content}>
                    <p className={cls.profile__text}>

                    </p>
                    <Button onClick={onCreate} extraClass={cls.profile__btn}>Hujjat topshirish</Button>
                </div>
            </div>
        </DynamicModuleLoader>
    );
}
