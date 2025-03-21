import React from 'react';
import {Route, Routes} from "react-router";

import {
    NewProfileDirection,
    NewProfileGallery,
    NewProfileHeader,
    NewProfileAbout,
    NewProfileGrant, NewProfilePersonal
} from "entities/newProfile";

import cls from "./newProfile.module.sass";

export const NewProfile = () => {
    return (
        <div className={cls.profile}>
            <NewProfileHeader/>
            <Routes>
                <Route path={"about"} element={<NewProfileAbout/>}/>
                <Route path={"direction"} element={<NewProfileDirection/>}/>
                <Route path={"gallery"} element={<NewProfileGallery/>}/>
                <Route path={"grant"} element={<NewProfileGrant/>}/>
                <Route path={"personal"} element={<NewProfilePersonal/>}/>
            </Routes>
        </div>
    );
}
