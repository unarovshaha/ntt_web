import React from 'react';

import {Button} from "shared/ui/button";

import cls from "./newProfileDirection.module.sass";
import image from "shared/assets/images/Ellipse 118.png";
import {useSelector} from "react-redux";
import {getHomeProfileLanding} from "entities/home/model/selector/homeSelector";
import { API_URL_DOC, } from "shared/api/base";
import univerImg from "shared/assets/images/Ellipse 118.png";
import {useNavigate} from "react-router-dom";

export const NewProfileDirection = () => {

    const data = useSelector(getHomeProfileLanding)

    const navigate = useNavigate()

    console.log(data, "data")

    return (
        <div className={cls.direction}>

            {data?.map(item => (
                <div
                    // onClick={() => navigate(`profile/${item.id}/about`)}
                    className={cls.profile__footer_container_box}
                >

                    <div className={cls.profile__footer_container_box_header}>
                        <img src={`${API_URL_DOC}media/${item.img}`} alt=""/>
                        <h2>{item.name}</h2>
                    </div>
                    <ul>
                        <li>Ta'lim tili <span>{item?.education_language}</span></li>
                        <li>Ta’lim shakli <span>{item?.shift}</span></li>
                        <li>Ta’lim narxi <span>{item?.price}</span></li>
                        <li>Ta’lim turi <span>{item?.type}</span></li>
                        <li>Boshlanish vaqti  <span>{item?.start_date}</span></li>
                        <li>Tugash vaqti  <span>{item?.expire_date}</span></li>

                    </ul>

                    <div className={cls.profile__footer_container_box_footer}>
                        <h3
                            onClick={() => {
                                localStorage.setItem("landingId", String(item.id))
                                navigate(`/register`)
                                // console.log()
                            }}
                            className={cls.box__link}
                        >
                            Hujjat topshirish
                        </h3>

                    </div>


                </div>
            ))}
        </div>
    );
}
