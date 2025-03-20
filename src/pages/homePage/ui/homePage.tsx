import {Outlet, Route, Routes} from "react-router";

import {HomeHeader, HomeNewsProfile, HomePage, OnlineTestEnter, TechnicalSchool} from "entities/home";
import {HomeNews, OnlineTestEnterFeature} from "features/homePage";
import {NewProfile} from "features/newProfile";

import cls from "./homePage.module.sass"

export const Home = () => {
    return (
        <div className={cls.header}>
            <HomeHeader/>

            <Outlet/>
            <Routes>
                <Route path={"/"} element={
                    <div className={cls.header__box}>
                        <HomePage/>
                        <HomeNews/>
                    </div>}
                />
                <Route path={"news/:id"} element={<HomeNewsProfile/>}/>
                <Route path={"onlineTest"} element={<OnlineTestEnter/>}/>
                <Route path={"onlineTest/onlineTestEnter"} element={<OnlineTestEnterFeature/>}/>
                <Route path={"technicSchools"} element={<TechnicalSchool/>}/>
                <Route path={"technicSchools/profile/:id/*"} element={<NewProfile/>}/>
            </Routes>

        </div>
    );
};

