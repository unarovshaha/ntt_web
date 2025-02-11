import React from 'react';
import cls from './header.module.sass'
import logo from 'shared/assets/logo/logo.png'
export const Header = () => {
    return (
        <div className={cls.header}>
            <img src={logo} alt=""/>
            <div className={cls.header__menu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

