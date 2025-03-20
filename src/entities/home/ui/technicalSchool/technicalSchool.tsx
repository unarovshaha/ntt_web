import React, {useState} from 'react';
import cls from './technicalSchool.module.sass'
import univerImg from "shared/assets/images/Ellipse 118.png"
import {Switch} from "shared/ui/switch";
import {TechnicalSchoolFilter} from "features/filter";
import {useNavigate} from "react-router-dom";
export const TechnicalSchool = () => {

    const navigate = useNavigate()

    return (
        <div className={cls.main}>
            <TechnicalSchoolFilter/>
            <div
                onClick={() => navigate("profile/1")}
                className={cls.profile__footer_container_box}
            >

                <div className={cls.profile__footer_container_box_header}>
                    <img src={univerImg} alt=""/>
                    <h2>efef</h2>
                </div>
                <ul>
                    <li>Ta'lim tili <span>Uzbek</span></li>
                    <li>Ta’lim shakli <span>Kunduzgi</span></li>
                    <li>Talablar <span>effef</span></li>
                    <li>Kontrakt to’lovi<span>12 000 000</span></li>
                </ul>

                <div className={cls.profile__footer_container_box_footer}>
                    <h3
                        className={cls.box__link}
                    >
                        Batafsil <i className={"fa fa-arrow-right"}/>
                    </h3>

                </div>


            </div>
        </div>
    );
};

