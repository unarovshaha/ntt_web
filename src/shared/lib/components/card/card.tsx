import React from 'react';
import {useNavigate} from "react-router-dom";

import {StarRating} from "../stars/stars";

import cls from "./card.module.sass";
import {time} from "framer-motion";
import {Button} from "shared/ui/button";

interface iCardProps {
    region?: string,
    route?: string,
    name?: string,
    priceMax?: number,
    priceMin?: number,
    startDate?: string,
    endDate?: string,
    id?: number,
    image?: string,
    desc?: string,
    rating: number,
    language?: [],
    shift?: [],
    grant?: boolean
}

export const Card = ({region, rating, route, desc, image, name, priceMax, priceMin, startDate, endDate, id , language , shift, grant}: iCardProps) => {

    const navigate = useNavigate()

    const organizationType = localStorage.getItem("organizationType")
    const menuName = localStorage.getItem("activeMenu")
    const formatSalary = (salary: string | number | undefined) => {
        return salary?.toLocaleString();
    };

    return (
        <div
            onClick={() => navigate(`${route}${id}/about`)}
            className={cls.card}
        >

            <div className={cls.card__header}>
                <img className={cls.card__img} src={image} alt=""/>
                <h2 className={cls.card__title}>
                    {name}
                </h2>
            </div>
            <div className={cls.card__container}>
                <ul>
                    <li>{menuName === '/Universitet' ? "Kontrakt to’lovi" : "To'lov summasi"}<div  className={cls.contract}><span>{formatSalary(priceMin)}</span>-<span>{formatSalary(priceMax)}</span></div> </li>
                    <li>
                        Qabul muddati
                        <span>{startDate} - {endDate}</span>
                    </li>
                </ul>
                <div className={cls.card__container_btn}>
                    <Button extraClass={cls.card__container_btn_about}>Batafsil</Button>
                </div>
            </div>

        </div>
    );
}
