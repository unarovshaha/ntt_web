import React from 'react';
import {useNavigate} from "react-router-dom";

import {StarRating} from "shared/ui/stars";

import cls from "./card.module.sass";

interface iCardProps {
    region?: string,
    route?: string,
    name?: string,
    priceMax?: number,
    priceMin?: number,
    startDate?: string,
    id?: number,
    image?: string,
    desc?: string,
    rating: number
}

export const Card = ({region, rating, route, desc, image, name, priceMax, priceMin, startDate, id}: iCardProps) => {

    const navigate = useNavigate()

    const organizationType = localStorage.getItem("organizationType")

    return (
        <div
            onClick={() => navigate(`${route}${id}`)}
            className={cls.card}
        >
            <div className={cls.header}>
                <div className={cls.header__container}>
                    <img src={image} alt=""/>
                    <div className={cls.header__rating}>
                        <div className={cls.header__location}>
                            <i className="fa-solid fa-location-dot"/>
                            <p className={cls.header__subTitle}>{region}</p>
                        </div>
                        <StarRating rating={rating}/>
                    </div>
                </div>
                <h2 className={cls.header__title}>
                    {name && name?.length > 16 ? `${name?.slice(0, 16)}...` : name}
                </h2>
                <div className={cls.header__info}>
                    <p>{organizationType === "Universitet" ? "Kontrakt to’lovi" : 'To’lovi summasi:'}</p>
                    <div className={cls.wrapper}>
                        <p>{priceMin} - {priceMax} UZS</p>
                    </div>
                </div>
                <p className={cls.header__text} dangerouslySetInnerHTML={desc ? {__html: desc} : undefined}/>
            </div>
            <div className={cls.card__line}/>
            <div className={cls.footer}>
                <p>{startDate}</p>
                <p
                    className={cls.footer__link}
                >
                    Batafsil
                </p>
            </div>
        </div>
    );
}
