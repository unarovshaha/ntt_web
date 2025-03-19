import React from 'react';

import {DirectionCard} from "shared/lib/components/directionCard/directionCard";
import {Button} from "shared/ui/button";

import cls from "./schoolDirectionAbout.module.sass";
import {useHttp} from "shared/api/base";
import {useParams} from "react-router";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {alertAction} from "entities/alert";

export const SchoolDirectionAbout = () => {

    const dispatch = useAppDispatch()
    const {id} = useParams()
    const {request} = useHttp()

    // organizations/organization/get/home/landing/13/

    const onCreate = () => {
        request({
            url: `students/student_requests/create/`,
            method: "POST",
            body: JSON.stringify({landing: id, user: undefined})
        })
            .then(res => {
                dispatch(alertAction.onAddAlertOptions({
                    status: true, type: "success", msg: res.msg
                }))
            })
    }


    return (
        <div className={cls.profile}>
            <DirectionCard/>
            <div className={cls.profile__content}>
                <p className={cls.profile__text}>
                    UBS har yili iqtidorli talabalarni qo‘llab-quvvatlash maqsadida
                    bir necha miliard so‘mlik grantlar
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
                    sahifalarda e’lon qilinadi.
                    UBS har yili iqtidorli talabalarni qo‘llab-quvvatlash maqsadida
                    bir necha miliard so‘mlik grantlar
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
    );
}
