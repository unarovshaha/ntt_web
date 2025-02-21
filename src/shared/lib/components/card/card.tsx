import React from 'react';

import cls from "./card.module.sass";

export const Card = () => {
    return (
        <div className={cls.card}>
            <div className={cls.header}>
                <div className={cls.header__location}>
                    <i className="fa-solid fa-location-dot"/>
                    <p className={cls.header__subTitle}>Toshkent viloyati</p>
                </div>
                <h2 className={cls.header__title}>Cathode Ray Oscilloscope (CRO)</h2>
                <div className={cls.header__info}>
                    <p>Oylik to’lovi</p>
                    <p>600 000 - 2 300 000 UZS</p>
                </div>
            </div>
            <div className={cls.card__line}/>
            <div className={cls.footer}>
                <p>1 May 2024 - 1 Oktabr 2024</p>
                <p className={cls.footer__link}>Batafsil</p>
            </div>
        </div>
    );
}
