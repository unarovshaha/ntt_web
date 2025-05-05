import {Outlet, Route, Routes} from "react-router";
import {useState} from "react";

import {
    HomeFooter,
    HomeHeader,
    HomeNewsProfile,
    homeNewsReducer,
    HomePage,
    homeReducer,
    OnlineTestEnter
} from "entities/home";
import {HomeNews, HomeTechnical} from "features/homePage";
import {NewProfile} from "features/newProfile";

import cls from "./homePage.module.sass"
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {HeaderItem} from "entities/home/model/schema/homeSchema";
import {OnlineTestEnterFeature, TakeTest , FinalGetAnswer} from "features/onlineTestEnter";


const reducers: ReducersList = {
    homeNewsSlice: homeNewsReducer,
    homeSlice: homeReducer
}
export const Home = () => {


    const [item, setItem] = useState<HeaderItem>()

    //@ts-ignore
    localStorage.setItem("menuId", item?.id)




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
                        </div>
                    }
                    />
                    <Route path={"news/:id"} element={<HomeNewsProfile/>}/>
                    <Route path={"onlineTest"} element={<OnlineTestEnter/>}/>
                    <Route path={"onlineTest/onlineTestEnter"} element={<OnlineTestEnterFeature/>}/>

                    <Route path={"onlineTest/takeTest/:id"} element={<TakeTest/>} />
                    <Route path={"onlineTest/answer/:id"} element={<FinalGetAnswer/>} />
                    {/*// @ts-ignore*/}
                    <Route path={`${item?.name}`} element={<HomeTechnical item={item}/>}/>
                    {/*// @ts-ignore*/}
                    <Route path={`${item?.name}/profile/:id/*`} element={<NewProfile/>}/>
                </Routes>
            </div>
            <HomeFooter/>
        </DynamicModuleLoader>
    );
};

