import React, {JSX} from 'react';
import {EntrancePage} from "pages/entrancePage";
import {getEntranceRoute, getMttFilterRoute, getOtmFilterRoute} from "shared/const/routers";
import {LoginPage} from "pages/loginPage";
import {MttFilter, OtmFilter} from "features/filter";


interface IRouterConfigProfiles {
    name: string,
    path: string,
    element: JSX.Element
}

export const routerConfigProfiles: IRouterConfigProfiles[] = [
    {
        name: "default",
        element: <EntrancePage/>,
        path: getEntranceRoute()
    },
    {
        name: "mttFilter",
        element: <MttFilter/>,
        path: getMttFilterRoute()
    },
    {
        name: "otmFilter",
        element: <OtmFilter/>,
        path: getOtmFilterRoute()
    }
    // {
    //     name: "login",
    //     element: <LoginPage/>,
    //     path: getLoginRoute
    // }
]

