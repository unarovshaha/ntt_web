import {Link} from "react-router";
import React from "react";
import {useSelector} from "react-redux";
import {getNotificationData} from "entities/notification";

import cls from "./notification.module.sass"
import {Input} from "shared/ui/input";

import img from "shared/assets/icons/Group 7.svg"

export const Notification = () => {
    const data = useSelector(getNotificationData)

    console.log(data)
    return (
        <div className={cls.notification}>

            <h1 className={cls.notification__title}>Messaging</h1>

            <Input name={"search"}/>

            <div className={cls.notification__list}>
                {
                    data?.map(item => (
                        <Link to={`/platform/notification/item/${item.id}`}>
                            <div className={cls.notification__list_item}>
                                <img src={img} alt=""/>
                               <div className={cls.notification__list_item_text}>
                                   <h2>{item.name}</h2>
                                   <h3>{item.descr}</h3>
                               </div>

                            </div>
                        </Link>
                    ))
                }
            </div>


        </div>
    );
};

