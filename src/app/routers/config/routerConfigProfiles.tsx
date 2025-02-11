import React, {JSX} from 'react';
import {EntrancePage} from "pages/entrancePage";
import {getEntranceRoute} from "shared/const/routers";
import {LoginPage} from "pages/loginPage";



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
    // {
    //     name: "login",
    //     element: <LoginPage/>,
    //     path: getLoginRoute
    // }
]

