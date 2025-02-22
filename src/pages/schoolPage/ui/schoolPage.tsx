import React from 'react';
import {Outlet, Route, Routes} from "react-router";

import {
    SchoolHeader,
    SchoolList
} from "entities/school";

import cls from "./schoolPage.module.sass";

export const SchoolPage = () => {



    return (
        <div className={cls.school}>
            <SchoolHeader/>
            <div className={cls.school__content}>
                <Outlet/>
                <Routes>
                    <Route path={"main"} element={<SchoolList/>}/>
                </Routes>
            </div>
        </div>
    );
}
