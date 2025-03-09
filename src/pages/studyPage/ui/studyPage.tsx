import React, {useState} from 'react';

import {StudyHeader, StudyMttList} from "entities/study";

import cls from "./studyPage.module.sass";
import {Outlet, Route, Routes} from "react-router";
import {SchoolDirection, SchoolGallery, SchoolGrant, SchoolList} from "entities/school";
import {OtmList} from "entities/otm";
import {MttFilterModal} from "features/filter";

export const StudyPage = () => {

    const [isMttFilter, setIsMttFilter] =useState<boolean>(false)

    return (
        <div className={cls.study}>
            <StudyHeader/>
            <div className={cls.study__content}>
                <Outlet/>
                <Routes>
                    <Route element={<SchoolList/>} path={"schoolList"}/>
                    <Route
                        element={
                        <>
                            <StudyMttList active={isMttFilter} setActive={setIsMttFilter}/>
                            <MttFilterModal active={isMttFilter} setActive={setIsMttFilter}/>
                        </>
                        }
                        path={"mttList"}
                    />
                    <Route element={<OtmList/>} path={"otmList"}/>
                    <Route element={<SchoolGallery/>} path={"gallery"}/>
                    <Route element={<SchoolDirection/>} path={"directionList"}/>
                    <Route element={<SchoolGrant/>} path={"grant"}/>
                </Routes>
            </div>
        </div>
    );
}
