import React from 'react';
import {Outlet, Route, Routes} from "react-router";

import {
    SchoolAdvantage,
    SchoolDirection,
    SchoolGallery,
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
                    <Route path={"advantages"} element={<SchoolAdvantage/>}/>
                    <Route path={"gallery"} element={<SchoolGallery/>}/>
                    <Route path={"direction"} element={<SchoolDirection/>}/>
                </Routes>
            </div>
        </div>
    );
}
