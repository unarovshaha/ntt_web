import React from 'react';

import cls from "./newProfileAbout.module.sass";
import image from "shared/assets/images/Rectangle 6648.png";
import {useSelector} from "react-redux";
import {getHomeProfileDescription} from "entities/home/model/selector/homeSelector";
import {API_URL_DOC} from "shared/api/base";
import {NewProfilePersonal} from "entities/newProfile/ui/newProfilePersonal/newProfilePersonal";

export const NewProfileAbout = () => {
    const data = useSelector(getHomeProfileDescription)
    console.log(data , "dadsa")

    return (
        <div style={{display: "flex"}}>
            <div className={cls.info}>
                <NewProfilePersonal/>
            </div>
            <div className={cls.about}>
                {/*// @ts-ignore*/}
                <img className={cls.about__image} src={data?.img ? `${API_URL_DOC}${data?.img}` : image} alt=""/>
                <h1 className={cls.about__title}>
                    {/*// @ts-ignore*/}

                    {data?.type}
                </h1>
                {/*// @ts-ignore*/}
                <p className={cls.about__text} dangerouslySetInnerHTML={{__html: data?.desc}}>

                </p>
            </div>
        </div>

    );
}
