import React, {useEffect} from 'react';

import {Button} from "shared/ui/button";

import cls from "./applicationProfile.module.sass";
import image from "shared/assets/images/Grant 1.png";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchApplicationProfile} from "entities/applicationProfile/model/applicationProfileThunk";
import {useParams} from "react-router";

export const ApplicationProfile = () => {

    const {id} = useParams()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (id)
            dispatch(fetchApplicationProfile({id}))
    }, [id])

    return (
        <div className={cls.profile}>
            <div className={cls.profile__container}>
                <div className={cls.profile__info}>
                    <div className={cls.wrapper}>
                        <div className={cls.user}>
                            <div className={cls.user__ava}>
                                <img src={image} alt=""/>
                            </div>
                            <div className={cls.user__info}>
                                <h2 className={cls.user__name}>Khusan Akhmedov</h2>
                                <p className={cls.user__status}>Arizachi</p>
                            </div>
                        </div>
                        <p className={cls.wrapper__container}>
                            Tel raqam: <span>+998900032880</span>
                        </p>
                        <p className={cls.wrapper__container}>
                            Qo’shimcha raqam: <span>+998900032880</span>
                        </p>
                        <p className={cls.wrapper__container}>
                            Elektron poshta: <span>Shahzoda@gmail.com</span>
                        </p>
                    </div>
                    <Button extraClass={cls.btn}>
                        Qabul qilinganlar ▲
                    </Button>
                </div>
                <div className={cls.profile__personal}>
                    <div className={cls.list}>
                        <h2 className={cls.list__title}>
                            Pasport ma’lumotlari
                        </h2>
                        <p className={cls.list__container}>
                            Pasport seria: <span>AA 9540945</span>
                        </p>
                        <p className={cls.list__container}>
                            Idenfikatsiya: <span>12365498745</span>
                        </p>
                        <p className={cls.list__container}>
                            Jinsi: <span>Ayol</span>
                        </p>
                        <p className={cls.list__container}>
                            Tug’ilgan joy: <span>Navoiy viloyati</span>
                        </p>
                    </div>
                    <div className={cls.list}>
                        <h2 className={cls.list__title}>
                            Ariza ma’lumotlari
                        </h2>
                        <p className={cls.list__container}>
                            Ta’lim turi: <span>Sirtqi</span>
                        </p>
                        <p className={cls.list__container}>
                            Joylashgan joyi: <span>Andijon</span>
                        </p>
                        <p className={cls.list__container}>
                            Idenfikatsiya: <span>To’ldirilmagan</span>
                        </p>
                        <p className={cls.list__container}>
                            Tug’ilgan joy: <span>Navoiy viloyati</span>
                        </p>
                        <p className={cls.list__container}>
                            Jinsi: <span>Erkak</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
