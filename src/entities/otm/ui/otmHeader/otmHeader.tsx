import React from 'react';
import classNames from "classnames";
import {NavLink} from "react-router-dom";

import {otmRouteConfig} from "../../model/otmConfig";

import cls from "./otmHeader.module.sass";

export const OtmHeader = () => {

    const renderLinks = () => {
        return otmRouteConfig.map(item => {
            return (
                <NavLink
                    className={({isActive}) =>
                        isActive ? classNames(cls.header__item, cls.active) : cls.header__item
                    }
                    to={`/platform/otmPage/${item.to}`}
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
