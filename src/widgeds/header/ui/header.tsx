import React, {useMemo} from 'react';
import {useLocation} from "react-router";

import {menuConfig} from "../../menuBar";

import cls from './header.module.sass'

export const Header = () => {

    const {pathname} = useLocation()

    const currentLocation = useMemo(() =>
            menuConfig.filter(item => item.to === pathname.slice(10, pathname.length))[0]?.label
        , [pathname])

    return (
        <div className={cls.header}>
            {/*<h2>{currentLocation}</h2>*/}

            <div className={cls.header__menu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

