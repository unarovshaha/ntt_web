import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useParams} from "react-router";

import {Input} from "shared/ui/input";
import {
    getStudyProfileData,
    getStudyProfileUserData,
    getStudyProfileUserImage
} from "../../model/studyProfileSelector";

import cls from "./studyProfileInfo.module.sass";
import {fetchStudyProfileAdmin} from "entities/studyProfile/model/studyProfileThunk";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export const StudyProfileInfo = () => {

    const dispatch = useAppDispatch()
    const {id} = useParams()
    const data = useSelector(getStudyProfileData)
    const userProfile = useSelector(getStudyProfileUserData)
    const userProfileImage = useSelector(getStudyProfileUserImage)

    useEffect(() => {
        if (id)
            dispatch(fetchStudyProfileAdmin({id}))
    }, [id])

    console.log(data, "data")

    return (
        <div className={cls.info}>
            <div
                className={cls.info__header}
            >
                <img
                    className={cls.info__ava}
                    src={userProfileImage?.url}
                    alt=""
                />
                <div className={cls.info__user}>
                    <h2>{userProfile?.user?.name} {userProfile?.user?.surname}</h2>
                    <p>{userProfile?.user?.phone}</p>
                </div>
            </div>
            <div className={cls.info__container}>
                <img className={cls.info__image} src={data?.img} alt=""/>
                {/*{userRole && */}
                {/*<i*/}
                {/*    className={classNames(*/}
                {/*        "fas fa-pen",*/}
                {/*        cls.iconSub*/}
                {/*    )}*/}
                {/*    onClick={() => setActive(true)}*/}
                {/*/>*/}
                {/*}*/}
                <div className={cls.info__form}>
                    <Input
                        name={"name"}
                        defaultValue={data?.name}
                        extraClass={cls.info__input}
                        placeholder={"Name"}
                        disabled
                    />
                    <Input
                        name={"type"}
                        value={data?.organization_type?.name}
                        extraClass={cls.info__input}
                        placeholder={"Organazition type"}
                        disabled
                    />
                    <Input
                        name={"region"}
                        value={data?.region?.name}
                        extraClass={cls.info__input}
                        placeholder={"Region"}
                        disabled
                    />
                    {/*<Input*/}
                    {/*    value={data?.locations}*/}
                    {/*    extraClass={cls.info__input}*/}
                    {/*    placeholder={"Location"}*/}
                    {/*    disabled*/}
                    {/*/>*/}

                    <div className={cls.info__locations} dangerouslySetInnerHTML={{__html: data?.locations}}>

                    </div>

                </div>
            </div>
        </div>
    );
}
