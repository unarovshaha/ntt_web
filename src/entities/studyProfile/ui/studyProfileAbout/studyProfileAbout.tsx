import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

import {getStudyProfileData, getStudyProfileGallery} from "../../model/studyProfileSelector";

import cls from "./studyProfileAbout.module.sass";
import {useParams} from "react-router";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchStudyProfileGallery} from "entities/studyProfile/model/studyProfileThunk";
import {StudyProfileGallery} from "entities/studyProfile/ui/studyProfileGallery/studyProfileGallery";
import {DropDown} from "shared/ui/dropdown";
import {NewProfileGallery} from "../../../newProfile";
import {API_URL_DOC} from "../../../../shared/api/base";

export const StudyProfileAbout = () => {

    const data = useSelector(getStudyProfileData)
    const {id} = useParams()
    const dispatch = useAppDispatch()
    const gallery = useSelector(getStudyProfileGallery)

    console.log(data, 'study')
    useEffect(() => {
        if (id)
            dispatch(fetchStudyProfileGallery({id}))
    }, [id])

    if (!data || !gallery) {
        return <div style={{textAlign: 'center', padding: '2rem'}}>Yuklanmoqda...</div>;
    }

    return (
        <div className={cls.info}>
            <div className={cls.container}>
                {/*@ts-ignore*/}
                {gallery.length > 0 ? (
                    <NewProfileGallery images={gallery} apiUrl={API_URL_DOC}/>
                ) : (
                    <p className={cls.about__null}>Gallereya topilmadi.</p>
                )}
                <DropDown title={"Universitet haqida"} subtitle={data?.name} html={data?.desc}/>
                <DropDown title={"Grandlar"} subtitle={data?.name} html={data?.grand_text}/>
            </div>
        </div>
    );
}
