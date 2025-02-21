import React, {useCallback, useState} from 'react';
import classNames from "classnames";
import {NavLink} from "react-router-dom";

import {menuConfig} from "../model/config/menuConfig";

import cls from "./MenuBar.module.sass"

export const MenuBar = () => {

    const [activeMultiLink, setActiveMultiLink] = useState(false)
    const [activeMenu, setActiveMenu] = useState(false)

    const renderMenuList = useCallback(() => {
        return menuConfig?.map(item => {


            return (
                <NavLink
                    onClick={() => setActiveMultiLink(false)}
                    key={item.to}
                    className={
                        ({isActive}) =>
                            isActive ? classNames(cls.options__item, cls.active) : cls.options__item
                    }
                    to={item.to}
                >

                    <h1>{item.label}</h1>

                </NavLink>
            )
        })
    }, [activeMultiLink, menuConfig])

    return (
        <>
            <div className={cls.menubar}>
                <div className={cls.profile}>
                    <h2>Menu</h2>
                </div>
                <div className={cls.options}>
                    {
                        renderMenuList()
                    }
                </div>

            </div>
        </>
    );
};

