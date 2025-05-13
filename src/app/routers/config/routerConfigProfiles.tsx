import React, {JSX} from 'react';
import {EntrancePage} from "pages/entrancePage";
import {
    getApplicationPageRoute, getApplicationProfilePageRoute,
    getEntranceRoute,
    getIdentificationRoute,
    getIdentifyRoute,
    getLoginRoute,
    getMttFilterRoute, getMttPageRoute, getNotificationListPageRoute, getNotificationPageRoute,
    getOnboardingRoute,
    getOtmFilterRoute,
    // getPersonalApplicationPageRoute,
    getProfilePageRoute,
    getRegisterRoute,
    getSchoolPageRoute, getStudyPageRoute, getStudyProfilePageRoute,
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
import {StudyPage} from "pages/studyPage/ui/studyPage";
import {ApplicationPage} from "pages/applicationPage";
import {ApplicationProfile} from "pages/applicationProfile";
import {SchoolDirectionAbout} from "entities/school";
import {StudyProfileNewPage, StudyProfilePage} from "pages/studyProfilePage";
import {NotificationPage} from "pages/notificationPage";
import {OnlineTestEnter} from "entities/home";
import {OnlineTestEnterFeature , TakeTest , FinalGetAnswer} from "features/onlineTestEnter";
import {TestResultPage} from "pages/testResultPage";



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
    },
    // {
    //     name: "application",
    //     element: <ApplicationPage/>,
    //     path: getPersonalApplicationPageRoute()
    // },
    {
        name: "applicationProfile",
        element: <ApplicationProfile/>,
        path: getApplicationProfilePageRoute(":id")
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
        // element: <ApplicationPage/>,
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
    },
    {
        name: "study",
        element: <StudyPage/>,
        path: getStudyPageRoute(":id")
    },
    {
        name: "studyProfile",
        // element: <StudyProfilePage/>,
        element: <StudyProfileNewPage/>,
        path: getStudyProfilePageRoute(":id")
    },
    {
        name: "notification",
        element: <NotificationPage/>,
        path: getNotificationListPageRoute()
    } ,
    {
        name: `onlineTest`,
        element: <OnlineTestEnter/>,
        path: "onlineTest/*"
    },
    {
        name: `onlineTestEnter`,
        element: <OnlineTestEnterFeature/>,
        path: "onlineTest/onlineTestEnter"
    },
    {
        name: `takeTest`,
        element: <TakeTest/>,
        path: "onlineTest/takeTest/:id"
    },
    {
        name: "answers",
        element: <FinalGetAnswer/>,
        path: "onlineTest/answer/:id"
    },
    {
        name: "testResults",
        element: <TestResultPage/>,
        path: "personal/testResults"
    }
]

