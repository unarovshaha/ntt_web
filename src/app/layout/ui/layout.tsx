import React from 'react';

import cls from './layout.module.sass'
import {Header} from "widgeds/header";
import {Outlet} from "react-router";
export const Layout = () => {
    return (
        <div className={cls.layout}>
            <Header/>
            <main className={cls.layout__content}>
                    <Outlet/>
            </main>

        </div>
    );
};

