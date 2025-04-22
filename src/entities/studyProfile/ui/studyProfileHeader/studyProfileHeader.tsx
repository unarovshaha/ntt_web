import React from 'react';
import classNames from "classnames";
import {NavLink} from "react-router-dom";

import cls from "./studyProfileHeader.module.sass";
import {useParams} from "react-router";

const menuList = [
    {name: "about", label: "Haqida"},
    {name: "grant", label: "Grantlar"},
    {name: "gallery", label: "Galereya"},
    {name: "directions", label: "Talim yo’nalishi"},
    {name: "comments", label: "Izohlar"},
]

export const StudyProfileHeader = () => {


    const {id} = useParams()

    const renderLinks = () => {
        return menuList.map(item => {
            return (
                <NavLink
                    to={`/platform/study/profile/${id}/${item.name}`}
                    className={
                        ({isActive}) =>
                            classNames(cls.item, {
                                [cls.active]: isActive
                            })
                    }
                >
                    <h2>{item.label}</h2>
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
