import React from 'react';
import {Outlet} from "react-router";

import {Header} from "widgeds/header";
import {MenuBar} from "widgeds/menuBar";
import {Alert} from "entities/alert";

import cls from './layout.module.sass'
import image from "shared/assets/logo/backLogo.png";

export const Layout = () => {
    return (
        <div className={cls.layout}>
            <Alert/>
            {window.innerWidth <= 768 ? null : <MenuBar/>}
            <main
                className={cls.layout__content}
                style={window.innerWidth <= 768 ? {} : {backgroundImage: `url(${image})`}}
            >
                <Header/>
                <div className={cls.layout__route}>
                    <Outlet/>
                </div>
                {window.innerWidth <= 768 ? <MenuBar/> : null}
            </main>
        </div>
    );
};

