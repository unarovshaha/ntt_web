import React from 'react';

import cls from "./directionCard.module.sass";
import image from "shared/assets/images/ubs.png";

export const DirectionCard = () => {
    return (
        <div className={cls.directionCard}>
            <div className={cls.header}>
                <div className={cls.header__image}>
                    <img src={image} alt=""/>
                </div>
                <div className={cls.header__text}>
                    <h3>Buxgalteriya hisobi va moliya</h3>
                    <p>10-maktab</p>
                </div>
            </div>
            <div className={cls.content}>
                <p className={cls.content__item}>
                    <span>Ta'lim tili</span>
                    Ingliz tili
                </p>
                <p className={cls.content__item}>
                    <span>Ta'lim shakli</span>
                    Kunduzgi / Sirtqi
                </p>
                <p className={cls.content__item}>
                    <span>Talablar</span>
                    Kirish imtihoni
                </p>
            </div>
            <div className={cls.footer}>
                <p className={cls.footer__item}>
                    <span>Kontrakt to'lovi</span>
                    9 860 000 so'mdan boshlab
                </p>
                <p className={cls.footer__link}>Batafsil</p>
            </div>
        </div>
    );
}
