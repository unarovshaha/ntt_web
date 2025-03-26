import {Outlet, Route, Routes} from "react-router";

import {HomeHeader, HomeNewsProfile, homeNewsReducer, HomePage, homeReducer, OnlineTestEnter} from "entities/home";
import {HomeNews, HomeTechnical, OnlineTestEnterFeature} from "features/homePage";
import {NewProfile} from "features/newProfile";

import cls from "./homePage.module.sass"
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {useEffect, useState} from "react";
import {HeaderItem} from "entities/home/model/schema/homeSchema";
import {useNavigate} from "react-router-dom";

const reducers: ReducersList = {
    homeNewsSlice: homeNewsReducer,
    homeSlice: homeReducer
}
export const Home = () => {


    const [item, setItem] = useState<HeaderItem>()


    if (item) {
        localStorage.setItem("pathname", item.name)
    }



    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={cls.header}>
                <HomeHeader setItem={setItem}/>

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

                    {/*// @ts-ignore*/}
                    <Route path={`${item?.name}`} element={<HomeTechnical item={item}/>}/>
                    {/*// @ts-ignore*/}
                    <Route path={`${item?.name}/profile/:id/*`} element={<NewProfile/>}/>
                </Routes>

            </div>
        </DynamicModuleLoader>
    );
};

