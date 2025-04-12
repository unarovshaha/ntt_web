import React, {useEffect} from 'react';
import classNames from "classnames";
import {useSelector} from "react-redux";

import {getStudyProfileGallery} from "../../model/studyProfileSelector";

import cls from "./studyProfileGallery.module.sass";
import image from "shared/assets/images/Rectangle 640.png";
import {useParams} from "react-router";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchStudyProfileGallery} from "entities/studyProfile/model/studyProfileThunk";

export const StudyProfileGallery = () => {

    const {id} = useParams()
    const dispatch = useAppDispatch()
    const data = useSelector(getStudyProfileGallery)

    useEffect(() => {
        if (id)
            dispatch(fetchStudyProfileGallery({id}))
    }, [id])

    const renderImages = () => {
        return data?.map((item, index) => {
            return (
                <div
                    key={index}
                    className={cls.images__item}
                >
                    <img src={item?.file?.url ?? image} alt=""/>
                </div>
            )
        })
    }

    return (
        <div
            className={classNames(
                cls.images, {
                    [cls.notActive]: !data?.length
                }
            )}
        >
            {renderImages()}

        </div>
    );
}
