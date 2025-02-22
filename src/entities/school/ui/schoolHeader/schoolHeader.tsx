import React from 'react';

import {schoolRoutesConfig} from "../../model/schoolConfig";

import cls from "./schoolHeader.module.sass";
import {NavLink} from "react-router-dom";
import classNames from "classnames";

export const SchoolHeader = () => {

    const renderLinks = () => {
        return schoolRoutesConfig.map(item => {
            return (
                <NavLink
                    className={({isActive}) =>
                        isActive ? classNames(cls.header__item, cls.active) : cls.header__item
                    }
                    to={`/platform/schoolPage/${item.to}`}
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
