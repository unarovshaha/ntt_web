import React from 'react';

import {Header} from "widgeds/header";
import {MenuBar} from "widgeds/menuBar";
import {Outlet} from "react-router";

import cls from './layout.module.sass'
import image from "shared/assets/logo/backLogo.png";

export const Layout = () => {
    return (
        <div className={cls.layout}>
            <MenuBar/>
            <main className={cls.layout__content} style={{backgroundImage: `url(${image})`}}>
                <Header/>
                <div className={cls.layout__route}>
                    <Outlet/>
                </div>
            </main>
        </div>
    );
};

