import React from 'react';

import cls from "./card.module.sass";
import {useNavigate} from "react-router-dom";

interface iCardProps {
    region?: string,
    name?: string,
    price?: number,
    startDate?: string,
    id?: number,
}

export const Card = ({region, name, price, startDate, id} : iCardProps) => {

    const navigate = useNavigate()

    return (
        <div className={cls.card}>
            <div className={cls.header}>
                <div className={cls.header__location}>
                    <i className="fa-solid fa-location-dot"/>
                    <p className={cls.header__subTitle}>{region}</p>
                </div>
                <h2 className={cls.header__title}>{name}</h2>
                <div className={cls.header__info}>
                    <p>Oylik to’lovi</p>
                    <p>{price} UZS</p>
                </div>
            </div>
            <div className={cls.card__line}/>
            <div className={cls.footer}>
                <p>{startDate}</p>
                <p
                    className={cls.footer__link}
                    onClick={() => navigate(`profile/${id}`)}
                >
                    Batafsil
                </p>
            </div>
        </div>
    );
}
