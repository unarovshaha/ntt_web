import {Link} from "react-router";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {fetchNotificationData, getNotificationData} from "entities/notification";

import cls from "./notification.module.sass"
import {Input} from "shared/ui/input";

import img from "shared/assets/icons/Group 7.svg"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export const Notification = () => {
    const data = useSelector(getNotificationData)
    const dispatch = useAppDispatch()



    const student_id = localStorage.getItem("student_id")
    useEffect(() => {
        dispatch(fetchNotificationData(Number(student_id)))
    } , [])


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
                                   <h3 dangerouslySetInnerHTML={{__html: item.grand_text}}></h3>
                               </div>

                            </div>
                        </Link>
                    ))
                }
            </div>


        </div>
    );
};

