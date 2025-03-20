import React from 'react';

import cls from "./newProfileHeader.module.sass";
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import {useParams} from "react-router";

const list = [
    {label: "Haqida", to: "about"},
    {label: "Yo’nalish", to: "direction"},
    {label: "Gallereya", to: "gallery"},
    {label: "Grantlar", to: "grant"},
    {label: "Profil", to: "personal"}
]

export const NewProfileHeader = () => {

    const {id} = useParams()

    const renderLinks = () => {
        return list?.map(item => {
            if (item.to === "personal" && window.innerWidth > 430) return null
            return (
                <NavLink
                    className={({isActive}) =>
                        classNames(cls.header__item, {
                            [cls.active]: isActive
                        })
                    }
                    // to={`/technicSchools/profile/${id}/${item.to}`}
                    to={`/technicSchools/profile/1/${item.to}`}
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
