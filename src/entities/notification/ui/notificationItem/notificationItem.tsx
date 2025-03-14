import React from 'react';

import cls from "./notificationItem.module.sass";
import image from "shared/assets/logo/Group 7.png";

export const NotificationItem = () => {
    return (
        <div className={cls.notification}>
            <h2 className={cls.notification__title}>
                <img src={image} alt=""/>
                University of Business and Science
            </h2>
            <p className={cls.notification__text}>
                Siz University of Business and Sciencega qabul qilindingiz !!
            </p>
            <p className={cls.notification__date}>
                24.15.2024 15:33
            </p>
        </div>
    );
}
