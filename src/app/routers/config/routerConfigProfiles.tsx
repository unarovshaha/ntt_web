import React, {JSX} from 'react';
import {EntrancePage} from "pages/entrancePage";
import {
    getEntranceRoute,
    getIdentificationRoute,
    getIdentifyRoute,
    getLoginRoute,
    getMttFilterRoute, getMttPageRoute, getNotificationPageRoute,
    getOnboardingRoute,
    getOtmFilterRoute, getOtmPageRoute,
    getProfilePageRoute,
    getRegisterRoute,
    getSchoolPageRoute,
    getUserApplicationsPageRoute,
    getUserEducationPageRoute, getUserNotificationsPageRoute
} from "shared/const/routers";
import {LoginPage} from "pages/loginPage";
import {MttFilter, OtmFilter} from "features/filter";
import {Onboarding} from "entities/login";
import {IdentificationReg} from "entities/register";
import {RegisterPage} from "pages/registerPage";
import {IdentifyPage} from "pages/identifyPage";
import {SchoolPage} from "pages/schoolPage";
import {
    ProfilePage,
    UserApplicationsPage,
    UserEducationPage,
    UserNotificationsPage
} from "pages/profilePage";
import {NotificationProfile} from "entities/profile";
import {MttPage} from "pages/mttPage";
import {OtmPage} from "pages/otmPage";


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
    },
    {
        name: "school",
        element: <SchoolPage/>,
        path: getSchoolPageRoute()
    },{
        name: "mtt",
        element: <MttPage/>,
        path: getMttPageRoute()
    },{
        name: "otm",
        element: <OtmPage/>,
        path: getOtmPageRoute()
    },
    {
        name: "profile",
        element: <ProfilePage/>,
        path: getProfilePageRoute()
    },
    {
        name: "education",
        element: <UserEducationPage/>,
        path: getUserEducationPageRoute()
    },
    {
        name: "userApplications",
        element: <UserApplicationsPage/>,
        path: getUserApplicationsPageRoute()
    },
    {
        name: "userNotifications",
        element: <UserNotificationsPage/>,
        path: getUserNotificationsPageRoute()
    },
    {
        name: "userNotifications/notification",
        element: <NotificationProfile/>,
        path: getNotificationPageRoute()
    }
]

