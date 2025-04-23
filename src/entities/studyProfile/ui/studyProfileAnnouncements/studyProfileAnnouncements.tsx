import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {useSelector} from "react-redux";

import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    getStudyProfileAnnouncements,
    getStudyProfileData,
    getStudyProfileDegree
} from "../../model/studyProfileSelector";
import {
    fetchStudyProfileAnnouncements,
    fetchStudyProfileDegree
} from "../../model/studyProfileThunk";

import cls from "./studyProfileAnnouncements.module.sass";
import {fetchAcademicYear, getAcademicYear, getCurrentAcademicYear} from "entities/oftenUsed";
import classNames from "classnames";
import {headers, useHttp} from "shared/api/base";
import {alertAction} from "entities/alert";
import {getUserId} from "entities/user";
import {Button} from "shared/ui/button";

export const StudyProfileAnnouncements = () => {

    const userId = useSelector(getUserId)
    const listAnn = useSelector(getStudyProfileAnnouncements)
    const currentYear = useSelector(getCurrentAcademicYear)
    const degrees = useSelector(getStudyProfileDegree)
    const data = useSelector(getStudyProfileData)
    const [selectedDegree, setSelectedDegree] = useState()

    const {request} = useHttp()
    const {id} = useParams()

    useEffect(() => {
        if (data?.organization_type?.id)
            dispatch(fetchStudyProfileDegree({id: data.organization_type.id}))
    }, [data?.organization_type?.id])


    const dispatch = useAppDispatch()

    useEffect(() => {
        // if (id && seasonId && selectedDegree) {
        if (id && currentYear && selectedDegree) {
            // dispatch(fetchStudyProfileAnnouncements({id, seasonId, selectedDegree}))
            dispatch(fetchStudyProfileAnnouncements({id, secondId: currentYear, selectedDegree}))
        }
    }, [id, currentYear, selectedDegree])

    const renderDirections = () => {
        return listAnn?.map(item => {
            return (
                <div className={cls.announcementsItem}>
                    <div className={cls.announcementsItem__header}>
                        <img className={cls.announcementsItem__ava} src={''} alt=""/>
                        <h2 className={cls.announcementsItem__title}>
                            {item.field.name}
                        </h2>
                    </div>
                    <div className={cls.announcementsItem__infoMenu}>
                        <div className={cls.info}>
                            <div className={cls.info__header}>
                                <div className={cls.info__icon}>
                                    <img src={''} alt=""/>
                                </div>
                                <p className={cls.info__subTitle}>Ta’lim tili</p>
                            </div>
                            <h3 className={cls.info__title}>{item.education_language?.map((item: {name: string}, index: number, arr: string | any[]) => <span>{item.name}{index !== arr.length - 1 && "\\"}</span>)}</h3>

                        </div>
                        {/*<div className={cls.info}>*/}
                        {/*    <div className={cls.info__header}>*/}
                        {/*        <div className={cls.info__icon}>*/}
                        {/*            <img src={image3} alt=""/>*/}
                        {/*        </div>*/}
                        {/*        <p className={cls.info__subTitle}>Ta’lim turi</p>*/}
                        {/*    </div>*/}
                        {/*    <h3 className={cls.info__title}>{item.degree.name}</h3>*/}

                        {/*</div>*/}
                        <div className={cls.info}>
                            <div className={cls.info__header}>
                                <div className={cls.info__icon}>
                                    <img src={''} alt=""/>
                                </div>
                                <p className={cls.info__subTitle}>Ta’lim shakli</p>
                            </div>
                            <h3 className={cls.info__title}>{item.shift.map((item: { name: string }, index: number, arr: string | any[]) => <span>{item.name}{index !== arr.length - 1 && "\\"}</span>)}</h3>

                        </div>
                        <div className={cls.info}>
                            <div className={cls.info__header}>
                                <div className={cls.info__icon}>
                                    <img src={''} alt=""/>
                                </div>
                                <p className={cls.info__subTitle}>Kontrakt to'lovi</p>
                            </div>
                            <h3 className={cls.info__title}>{item.price.toLocaleString()} so'm</h3>

                        </div>
                        <div className={cls.info}>
                            <div className={cls.info__header}>
                                <div className={cls.info__icon}>
                                    <img src={""} alt=""/>
                                </div>
                                <p className={cls.info__subTitle}>Qabul muddati</p>
                            </div>
                            <h3 className={cls.info__title}>{item.expire_date.replace(/-/g, ".")}</h3>
                        </div>
                    </div>
                    <div className={cls.announcementsItem__text}>
                        <div className={cls.header}>
                            {
                                item.grant === false ? <div className={cls.header__garant}></div>
                                    : item.grant === true ?
                                    <div className={cls.header__garant}>
                                        <i
                                            className={classNames(
                                                "fas fa-thumbs-up",
                                                cls.header__like
                                            )}
                                        />
                                        <p className={cls.header__title}>Grant mavjud</p>
                                    </div> : null
                            }
                            <div className={cls.header__up}>
                                <i className={"fas fa-arrow-up"}/>
                            </div>
                        </div>

                        {/*<h2>Ma'lumot</h2>*/}
                        {/*<div className={cls.text}>*/}
                        {/*    <div dangerouslySetInnerHTML={{__html: item.desc.toString().substring(0,300)}}></div>*/}
                        {/*    <span>...</span>*/}
                        {/*</div>*/}

                        <br/>
                        <br/>
                        <h2>Talablar</h2>
                        <div  className={cls.text}>
                            <div dangerouslySetInnerHTML={{__html: item?.requirements?.toString()?.substring(0,300)}}></div>
                            <span>...</span>
                        </div>
                        <Button onClick={() => onCreate(item.id)} extraClass={cls.profile__btn}>Hujjat topshirish</Button>
                    </div>
                </div>
            )
        })
    }

    const onCreate = (id: number) => {
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
            .catch(err => {
                dispatch(alertAction.onAddAlertOptions({
                    type: "error",
                    status: true,
                    msg: "Siz allaqachon bu yo'nalishdan ro'yhatdan o'tgansiz!"
                }))
            })
    }


    return (
        <div className={cls.wrapper}>
            <div className={cls.announcementsHeader}>
                {/*<h1 className={cls.announcementsHeader__title}>E’lonlar</h1>*/}
                {/*<div className={cls.announcementsHeader__icon}>*/}
                {/*    {userRole&&<i*/}
                {/*        onClick={onNavigate}*/}
                {/*        className={classNames(*/}
                {/*            "fas fa-plus",*/}
                {/*            cls.announcementsHeader__inner*/}
                {/*        )}*/}
                {/*    />}*/}
                {/*</div>*/}
                <div className={cls.announcementsHeader__menu}>

                    {
                        degrees?.map(item => {
                            return (
                                <h2
                                    onClick={() => setSelectedDegree(item.id)}
                                    className={classNames({[cls.active]: selectedDegree === item.id})}
                                >
                                    {item.name}
                                </h2>
                            )
                        })
                    }

                </div>
            </div>
            <div className={cls.announcements}>

                {renderDirections()}

            </div>
        </div>
    );
}
