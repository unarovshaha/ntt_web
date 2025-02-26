import React from 'react';
import classNames from "classnames";
import {NavLink} from "react-router-dom";

import {mttRoutesConfig} from "../../model/mttConfig";

import cls from "./mttHeader.module.sass";

export const MttHeader = () => {

    const renderLinks = () => {
        return mttRoutesConfig.map(item => {
            return (
                <NavLink
                    className={({isActive}) =>
                        isActive ? classNames(cls.header__item, cls.active) : cls.header__item
                    }
                    to={`/platform/mttPage/${item.to}`}
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
