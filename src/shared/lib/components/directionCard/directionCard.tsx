import React from 'react';

import cls from "./directionCard.module.sass";
import image from "shared/assets/images/ubs.png";
import {useSelector} from "react-redux";
import {
    getStudyProfileLanguage,
    getStudyProfilePrice,
    getStudyProfileRegion,
    getStudyProfileShift,
    getStudyProfileName
} from "entities/studyProfile/model/studyProfileSelector";

interface IDirectionCardProps {
    name?: string,
    price?: number,
    shirt?: string,
    region?: string,
    language?: string
}

export const DirectionCard = () => {

    const name = useSelector(getStudyProfileName)
    const language = useSelector(getStudyProfileLanguage)
    const price = useSelector(getStudyProfilePrice)
    const region = useSelector(getStudyProfileRegion)
    const shift = useSelector(getStudyProfileShift)

    return (
        <div className={cls.directionCard}>
            <div className={cls.header}>
                <div className={cls.header__image}>
                    <img src={image} alt=""/>
                </div>
                <div className={cls.header__text}>
                    <h3>{name}</h3>
                    <p>{region}</p>
                    {/*<p>10-maktab</p>*/}
                </div>
            </div>
            <div className={cls.content}>
                <p className={cls.content__item}>
                    <span>Ta'lim tili</span>
                    {language}
                </p>
                <p className={cls.content__item}>
                    <span>Ta'lim shakli</span>
                    {shift}
                </p>
                <p className={cls.content__item}>
                    <span>Talablar</span>
                    Kirish imtihoni
                </p>
            </div>
            <div className={cls.footer}>
                <p className={cls.footer__item}>
                    <span>Kontrakt to'lovi</span>
                    {price}
                </p>
                {/*<p className={cls.footer__link}>Batafsil</p>*/}
            </div>
        </div>
    );
}
