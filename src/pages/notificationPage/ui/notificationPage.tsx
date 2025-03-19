import React from 'react';

import {NotificationItem, notificationReducer} from "entities/notification";
import {Notification} from "features/notification";
import { Outlet, Route, Routes} from "react-router";
import {useNavigate} from "react-router-dom";
import {DynamicModuleLoader} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const reducers = {
    notificationSlice: notificationReducer
}

export const NotificationPage = () => {
    const navigate = useNavigate()
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div style={{display: "flex" , gap: "3rem"}}>
                <div style={{width: "40rem"}}>
                    <Notification/>
                </div>


                <Outlet/>

                <Routes>
                    <Route path={`item/:id`} element={<NotificationItem/>}/>

                </Routes>
            </div>

        </DynamicModuleLoader>
    );
}
