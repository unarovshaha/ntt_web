import React from 'react';

import cls from "./newProfileAbout.module.sass";
import image from "shared/assets/images/defaultImg.svg";
import {useSelector} from "react-redux";
import {getHomeProfileDescription, getHomeProfileGallery} from "entities/home/model/selector/homeSelector";
import {API_URL_DOC} from "shared/api/base";
import {NewProfilePersonal} from "entities/newProfile/ui/newProfilePersonal/newProfilePersonal";
import {NewProfileGallery} from "entities/newProfile/ui/newProfileGallery/newProfileGallery";
import {DropDown} from "shared/ui/dropdown";

export const NewProfileAbout = () => {
    const data = useSelector(getHomeProfileDescription)
    const gallery = useSelector(getHomeProfileGallery)
    if (!data || !gallery) {
        return <div style={{textAlign: 'center', padding: '2rem'}}>Yuklanmoqda...</div>;
    }
    return (
        <div style={{display: "flex"}}>
            {window.innerWidth > 700 &&<div className={cls.info}> <NewProfilePersonal/></div> }
            <div className={cls.about}>
                {gallery.length > 0 ? (
                    <NewProfileGallery images={gallery} apiUrl={API_URL_DOC}/>
                ) : (
                    <p>Gallereya topilmadi.</p>
                )}
                {/*@ts-ignore*/}
                <DropDown title={data?.name} subtitle={data?.name}
                          //@ts-ignore
                          html={data?.desc}/>
                {/*@ts-ignore*/}
                <DropDown title={"Grand"} subtitle={data?.name}
                          //@ts-ignore
                          html={data?.grand_text}/>
            </div>
        </div>

    );
}
