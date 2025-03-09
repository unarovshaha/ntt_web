import React from 'react';
import classNames from "classnames";
import {NavLink} from "react-router-dom";

import {studyRouteConfig} from "../../model/studyConfig";

import cls from "./studyHeader.module.sass";

export const StudyHeader = () => {

    const renderLinks = () => {
        return studyRouteConfig.map(item => {
            return (
                <NavLink
                    className={({isActive}) =>
                        isActive ? classNames(cls.header__item, cls.active) : cls.header__item
                    }
                    to={`/platform/study/${item.to}`}
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
