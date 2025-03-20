import React from 'react';

import cls from "./newProfileHeader.module.sass";
import {NavLink} from "react-router-dom";
import classNames from "classnames";

const list = [
    {label: "Haqida", to: "about"},
    {label: "Yo’nalish", to: "direction"},
    {label: "Gallereya", to: "gallery"},
    {label: "Grantlar", to: "grant"},
]

export const NewProfileHeader = () => {
    const renderLinks = () => {
        return list?.map(item => {
            return (
                <NavLink
                    className={({isActive}) =>
                        classNames(cls.header__item, {
                            [cls.active]: isActive
                        })
                    }
                    to={`/profile/${item.to}`}
                >
                    {item.label}
                </NavLink>
            )
        })
    }

    return (
        <div className={cls.header}>
            {renderLinks()}
        </div>
    );
}
