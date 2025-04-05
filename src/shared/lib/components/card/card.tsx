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
        <div
            onClick={() => navigate(`/platform/study/profile/${id}`)}
            className={cls.card}
        >
            <div className={cls.header}>
                <div className={cls.header__location}>
                    <i className="fa-solid fa-location-dot"/>
                    <p className={cls.header__subTitle}>{region}</p>
                </div>
                <h2 className={cls.header__title}>{name}</h2>
                <div className={cls.header__info}>
                    <p>Kontrakt to’lovi</p>
                    <div>

                        <p>{price} UZS</p>
                        <h4>dan</h4>
                    </div>
                    <div>

                        <p>{price} UZS</p>
                        <h4>gacha</h4>
                    </div>

                </div>
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
