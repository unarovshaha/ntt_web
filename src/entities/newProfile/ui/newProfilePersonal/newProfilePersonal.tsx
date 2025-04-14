import React from 'react';

import cls from "./newProfilePersonal.module.sass";
import image from "shared/assets/images/Rectangle 640.png";
import {useSelector} from "react-redux";
import {getHomeProfileItem, getHomeProfileItemHeader} from "../../../home/model/selector/homeSelector";
import {Organization} from "../../../home/model/schema/homeSchema";

export const NewProfilePersonal = () => {
    const data  = useSelector(getHomeProfileItem)
    const dataHeader  = useSelector(getHomeProfileItemHeader)

    localStorage.setItem("orgId" , String(data?.organization_type.id))
    return (
        <div className={cls.info}>
            {/*<div*/}
            {/*    className={cls.info__header}*/}
            {/*>*/}
            {/*    <img*/}
            {/*        className={cls.info__ava}*/}
            {/*        src={`${dataHeader?.user.file?.url}`}*/}
            {/*        alt=""*/}
            {/*    />*/}
            {/*    <div className={cls.info__user}>*/}
            {/*        <h2>{dataHeader?.user.username}</h2>*/}
            {/*        <p>{dataHeader?.user.phone_extra}</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={cls.info__container}>
                <img className={cls.info__image} src={`${data?.img ? data.img : image}`} alt=""/>
                <div className={cls.info__form}>
                    <p className={cls.list} style={{justifyContent: "center"}}>
                        <span>{data?.name}</span>
                    </p>
                    <p className={cls.list}>
                        Tashkilot turi<span>{data?.organization_type.name}</span>
                    </p>
                    <p className={cls.list}>
                        Viloyat<span>{data?.region.name}</span>
                    </p>
                    <p className={cls.list}>
                         {/*@ts-ignore*/}
                        INN<span dangerouslySetInnerHTML={{__html: data?.inn}}/>
                    </p>
                    {/*@ts-ignore*/}

                    <div className={cls.map} dangerouslySetInnerHTML={{__html : data?.locations}}>

                    </div>
                </div>
            </div>
        </div>
    );
}
