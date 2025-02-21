import React, {JSX} from 'react';
import {EntrancePage} from "pages/entrancePage";
import {
    getEntranceRoute, getIdentificationRoute, getIdentifyRoute,
    getLoginRoute,
    getMttFilterRoute,
    getOnboardingRoute,
    getOtmFilterRoute, getRegisterRoute
} from "shared/const/routers";
import {LoginPage} from "pages/loginPage";
import {MttFilter, OtmFilter} from "features/filter";
import {Onboarding} from "entities/login";
import {IdentificationReg, Register} from "entities/register";
import {RegisterPage} from "pages/registerPage";
import {IdentifyPage} from "pages/identifyPage";


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
    },
    {
        name: "login",
        element: <LoginPage/>,
        path: getLoginRoute()
    },
    {
        name: "onboard",
        element: <Onboarding/>,
        path: getOnboardingRoute()
    },
    {
        name: "register",
        element: <RegisterPage/>,
        path: getRegisterRoute()
    },
    {
        name: "identification",
        element: <IdentificationReg/>,
        path: getIdentificationRoute()
    },
    {
        name: "identify",
        element: <IdentifyPage/>,
        path: getIdentifyRoute()
    }
]

