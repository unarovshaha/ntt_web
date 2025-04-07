import React, {useEffect, useState} from 'react';
import cls from './technicalSchool.module.sass'
import univerImg from "shared/assets/images/Ellipse 118.png"
import {Switch} from "shared/ui/switch";
import {TechnicalSchoolFilter} from "features/filter";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getHomeTechnical} from "entities/home/model/selector/homeSelector";
import {HeaderItem} from "entities/home/model/schema/homeSchema";


export const TechnicalSchool = ({item} : {item : HeaderItem}) => {

    const navigate = useNavigate()


    const data = useSelector(getHomeTechnical)


    const formatSalary = (salary : string | number) => {
        return Number(salary).toLocaleString();
    };

    return (
        <div className={cls.main}>

            <TechnicalSchoolFilter item={item}/>
            {data?.map(item => (
                <div
                    onClick={() => {
                        navigate(`profile/${item.id}/about`)
                        localStorage.setItem("organizationID" , String(item.id))
                    }}
                    className={cls.profile__footer_container_box}
                >

                    <div className={cls.profile__footer_container_box_header}>
                        <img src={item.img ? item.img : univerImg} alt=""/>
                        <h2>{item.name}</h2>
                    </div>
                    <ul>
                        <li>Ta'lim tili <span>{item?.landing?.language?.map(item => <span>{item.name}</span>)}</span></li>
                        <li>Ta’lim shakli <span>{item.landing?.shift}</span></li>
                        <li>Talablar <span dangerouslySetInnerHTML={{__html: item.landing?.requirements}}></span></li>
                        <li>Kontrakt to’lovi<span>{formatSalary(item.landing?.price)}</span></li>
                    </ul>

                    <div className={cls.profile__footer_container_box_footer}>
                        <h3
                            className={cls.box__link}
                        >
                            Batafsil <i className={"fa fa-arrow-right"}/>
                        </h3>

                    </div>


                </div>
            ))}

        </div>
    );
};

