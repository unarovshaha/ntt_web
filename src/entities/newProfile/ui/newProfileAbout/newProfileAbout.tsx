import React, {useEffect} from 'react';

import cls from "./newProfileAbout.module.sass";
import image from "shared/assets/images/defaultImg.svg";
import {useSelector} from "react-redux";
import {getHomeProfileDescription, getHomeProfileGallery} from "entities/home/model/selector/homeSelector";
import {API_URL_DOC} from "shared/api/base";
import {NewProfilePersonal} from "entities/newProfile/ui/newProfilePersonal/newProfilePersonal";
import {NewProfileGallery} from "entities/newProfile/ui/newProfileGallery/newProfileGallery";
import {DropDown} from "shared/ui/dropdown";
import {getHomeNews} from "entities/home/model/selector/homeNewsSelector";
import {useNavigate} from "react-router";
import {fetchNews, fetchProfileItem} from "entities/home/model/thunk/newsThunk";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {HomeNews} from "entities/newProfile/ui/homeNews/homeNews";

export const NewProfileAbout = () => {
    const data = useSelector(getHomeProfileDescription)
    const gallery = useSelector(getHomeProfileGallery)



    if (!data || !gallery) {
        return <div style={{textAlign: 'center', padding: '2rem'}}>Yuklanmoqda...</div>;
    }



    return (
        <div className={cls.main}>
            <div className={cls.info}><NewProfilePersonal/></div>
            <div className={cls.container}>
                <div className={cls.about}>
                    {gallery.length > 0 ? (
                        <NewProfileGallery images={gallery} apiUrl={API_URL_DOC}/>
                    ) : (
                        <p className={cls.about__null}>Gallereya topilmadi.</p>
                    )}
                    {/*@ts-ignore*/}
                    <DropDown title={"Universitet haqida"} subtitle={data?.name}
                        //@ts-ignore
                              html={data?.desc}/>
                    {/*@ts-ignore*/}
                    < DropDown title={"Grandlar"} subtitle={data?.name}
                        //@ts-ignore
                               html={data?.grand_text}/>
                </div>
               <HomeNews/>
            </div>
        </div>

    );
}
