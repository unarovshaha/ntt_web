import React from 'react';

import cls from "./newProfileGrant.module.sass";
import image from "shared/assets/images/Rectangle 640.png";
import {useSelector} from "react-redux";
import {getHomeProfileGallery, getHomeProfileLanding} from "entities/home/model/selector/homeSelector";
import {NewProfilePersonal} from "entities/newProfile/ui/newProfilePersonal/newProfilePersonal";

export const NewProfileGrant = () => {

    const data = useSelector(getHomeProfileLanding)
    return (
        <div className={cls.grant}>

            {window.innerWidth > 700 && <NewProfilePersonal/> }
            <div className={cls.grant__container}>
                {/*<img className={cls.image} src={image} alt=""/>*/}
                {data ?    <p className={cls.text} dangerouslySetInnerHTML={{__html: data[0]?.desc}}/> : ""}
            </div>
        </div>
    );
}
