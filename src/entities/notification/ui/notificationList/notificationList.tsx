import React from 'react';

import {NotificationItem} from "../notificationItem/notificationItem";

import cls from "./notificationList.module.sass";

export const NotificationList = () => {

    const render = () => {
        return [1,2,3,4,5,6,7,8,9,0].map(item => {
            return (
                <NotificationItem/>
            )
        })
    }

    return (
        <div className={cls.list}>
            {render()}
        </div>
    );
}
