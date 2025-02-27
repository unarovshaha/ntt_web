import React from 'react';
import {Outlet, Route, Routes} from "react-router";

import {
    OtmAbout,
    OtmAdvantage,
    OtmHeader,
    OtmDirection,
    OtmDirectionAbout,
    OtmGallery,
    OtmGrant,
    OtmList
} from "entities/otm";

import cls from "./otmPage.module.sass";

export const OtmPage = () => {
    return (
        <div className={cls.otm}>
            <OtmHeader/>
            <div className={cls.otm__content}>
                <Outlet/>
                <Routes>
                    <Route path={"main"} element={<OtmList/>}/>
                    <Route path={"advantages"} element={<OtmAdvantage/>}/>
                    <Route path={"gallery"} element={<OtmGallery/>}/>
                    <Route path={"grant"} element={<OtmGrant/>}/>
                    <Route path={"direction"} element={<OtmDirection/>}/>
                    <Route path={"aboutDirection"} element={<OtmDirectionAbout/>}/>
                    <Route path={"aboutOtm"} element={<OtmAbout/>}/>
                </Routes>
            </div>
        </div>
    );
}
