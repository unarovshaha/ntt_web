import React, {useEffect} from 'react';
import {useParams} from "react-router";

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

const reducers: ReducersList = {
    studyProfileSlice: studyProfileReducer
}

export const StudyProfilePage = () => {

    const userId = useSelector(getUserId)
    const loading = useSelector(getStudyProfileLoading)
    const dispatch = useAppDispatch()
    const {id} = useParams()
    const {request} = useHttp()

    useEffect(() => {
        if (id)
            dispatch(fetchStudyProfileData({id}))
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
            <div className={cls.profile}>
                <DirectionCard/>
                <div className={cls.profile__content}>
                    <p className={cls.profile__text}>
                        e’lon qilib kelmoqda. O‘qishga kirishda grant kundguzgi ta’lim
                        uchun joriy qilingan bo‘lib, 4 yil
                        uchun amal qiladi. Kirish imtihonlarida eng yuqori ball olgan
                        talabgorlarga grant beriladi va
                        grantni qo‘lga kiritgan talabalar ro‘yxati qabul imtihonlari
                        yakunlanganidan so‘ng rasmiy
                        sahifalarda e’lon qilinadi.
                        UBS har yili iqtidorli talabalarni qo‘llab-quvvatlash maqsadida bir
                        necha miliard so‘mlik grantlar
                        e’lon qilib kelmoqda. O‘qishga kirishda grant kundguzgi ta’lim
                        uchun joriy qilingan bo‘lib, 4 yil
                        uchun amal qiladi. Kirish imtihonlarida eng yuqori ball olgan
                        talabgorlarga grant beriladi va
                        grantni qo‘lga kiritgan talabalar ro‘yxati qabul imtihonlari
                        yakunlanganidan so‘ng rasmiy
                        sahifalarda e’lon qilinadi.
                        UBS har yili iqtidorli talabalarni qo‘llab-quvvatlash maqsadida
                        bir necha miliard so‘mlik grantlar
                        e’lon qilib kelmoqda. O‘qishga kirishda grant kundguzgi ta’lim
                        uchun joriy qilingan bo‘lib, 4 yil
                        uchun amal qiladi. Kirish imtihonlarida eng yuqori ball olgan
                        talabgorlarga grant beriladi va
                        grantni qo‘lga kiritgan talabalar ro‘yxati qabul imtihonlari
                        yakunlanganidan so‘ng rasmiy
                        sahifalarda e’lon qilinadi.UBS har yili iqtidorli talabalarni
                        qo‘llab-quvvatlash maqsadida bir necha
                        miliard so‘mlik grantlar e’lon qilib kelmoqda. O‘qishga kirishda
                        grant kundguzgi ta’lim uchun joriy
                        qilingan bo‘lib, 4 yil uchun amal qiladi. Kirish imtihonlarida
                        eng yuqori ball olgan talabgorlarga
                        grant beriladi va grantni qo‘lga kiritgan talabalar ro‘yxati qabul
                        imtihonlari yakunlanganidan so‘ng
                        rasmiy sahifalarda e’lon qilinadi.
                    </p>
                    <Button onClick={onCreate} extraClass={cls.profile__btn}>Hujjat topshirish</Button>
                </div>
            </div>
        </DynamicModuleLoader>
    );
}
