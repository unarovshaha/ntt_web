import React from 'react';
import {useSelector} from "react-redux";

import {getStudyProfileData} from "../../model/studyProfileSelector";

import cls from "../studyProfileAbout/studyProfileAbout.module.sass";

export const StudyProfileGrant = () => {

    const data = useSelector(getStudyProfileData)

    return (
        <div className={cls.info}>
            <div className={cls.container}>
                <p dangerouslySetInnerHTML={{__html: data?.desc}}/>
            </div>
        </div>
    )
}
