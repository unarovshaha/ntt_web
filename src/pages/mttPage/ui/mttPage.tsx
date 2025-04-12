import React, {useState} from 'react';
import {Outlet, Routes, Route} from "react-router";

import {
    MttHeader,
    MttAdvantage,
    MttGallery,
    MttGrant,
    MttDirection,
    MttDirectionAbout,
    MttAbout
} from "entities/mtt";

import cls from "./mttPage.module.sass";
import {MttFilterModal} from "features/filter";

export const MttPage = () => {

    const [active, setActive] = useState<boolean>(true)

    return (
        <div className={cls.mtt}>
            <MttHeader/>
            <div className={cls.mtt__content}>
                <Outlet/>
                <Routes>
                    {/*<Route path={"main"} element={<MttList/>}/>*/}
                    <Route path={"advantages"} element={<MttAdvantage/>}/>
                    <Route path={"gallery"} element={<MttGallery/>}/>
                    <Route path={"grant"} element={<MttGrant/>}/>
                    <Route path={"direction"} element={<MttDirection/>}/>
                    <Route path={"aboutDirection"} element={<MttDirectionAbout/>}/>
                    <Route path={"aboutMtt"} element={<MttAbout/>}/>
                </Routes>
            </div>
            <MttFilterModal active={active} setActive={setActive}/>
        </div>
    );
}
//33 874 77 10