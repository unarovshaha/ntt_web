import React from 'react';

import cls from "./homeFooter.module.sass";
import logo from "shared/assets/logo/logo.png";
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import {useSelector} from "react-redux";
import {getHomeHeaderItem} from "../../model/selector/homeSelector";

export const HomeFooter = () => {

    const data = useSelector(getHomeHeaderItem)

    return (
        <div className={cls.footer}>
            <div className={cls.footer__container}>
                <div className={cls.info}>
                    <img src={logo} alt=""/>
                    <p>
                        Nodavlat ta’lim tashkiloti sifatida biz sifatli, innovatsion va <br/>
                        zamonaviy ta’lim xizmatlarini taqdim etishga intilamiz. <br/>
                        O‘quvchilarimizning bilimga bo‘lgan ishtiyoqini qo‘llab- <br/>
                        quvvatlaymiz va ularni muvaffaqiyat sari yetaklaymiz.
                    </p>
                    <div className={cls.info__links}>
                        <i className="fa-brands fa-facebook"/>
                        <i className="fa-brands fa-twitter"/>
                        <i className="fa-brands fa-square-instagram"/>
                        <i className="fa-brands fa-linkedin-in"/>
                        <i className="fa-brands fa-youtube"/>
                    </div>
                </div>
                <div className={cls.routes}>
                    <div className={cls.routes__container}>
                        <h2>Tez havolalar</h2>
                        <div className={cls.inner}>
                            <NavLink
                                className={
                                    ({isActive}) =>
                                        isActive ? classNames(cls.link, {
                                            [cls.active]: true
                                        }) : cls.link
                                }
                                to={"/"}
                            >
                                Home
                            </NavLink>
                            {
                                data?.map((item) => (
                                    <NavLink
                                        className={
                                            ({isActive}) =>
                                                isActive ? classNames(cls.link, {
                                                    [cls.active]: true
                                                }) : cls.link
                                        }
                                        to={`/${item.name}`}
                                    >
                                        {item.name}
                                    </NavLink>
                                ))
                            }
                            <NavLink
                                className={
                                    ({isActive}) =>
                                        isActive ? classNames(cls.link, {
                                            [cls.active]: true
                                        }) : cls.link
                                }
                                to={"/onlineTest"}
                            >
                                Online test
                            </NavLink>
                        </div>
                    </div>
                    <div className={cls.routes__container}>
                        <h2>Bog’lanish uchun</h2>
                        <div className={cls.inner}>
                            <p>
                                <i className="fa-solid fa-location-dot"/>
                                Toshkent shahri
                            </p>
                            <p>
                                <i className="fa-solid fa-envelope"/>
                                tashkilot@hello.com
                            </p>
                            <p>
                                <i className="fa-solid fa-phone"/>
                                +1 386-688-3295
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cls.footer__end}>
                <p>© 2025 Nodavlat ta’lim tashkilotlari</p>
                <p>Barcha huquqlar himoyalangan.</p>
            </div>
        </div>
    );
}
