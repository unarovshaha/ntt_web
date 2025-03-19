import React, {useEffect} from 'react';

import cls from "./notificationItem.module.sass";
import image from "shared/assets/logo/Group 7.png";
import TextEditor from "entities/textEditor/TextEditor";
import {Button} from "shared/ui/button";
import img from "shared/assets/icons/send-2.svg"
import {useSelector} from "react-redux";
import {getNotificationProfile} from "entities/notification/module/notificationSelector";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchNotificationProfile} from "entities/notification/module/notificationThunk";
import {useParams} from "react-router";

export const NotificationItem = () => {

    const data = useSelector(getNotificationProfile)

    const dispatch = useAppDispatch()

    const {id} = useParams()

    // const id = localStorage.getItem("organization_id")
    const student_id = localStorage.getItem("student_id")
    useEffect(() => {
        if (id && student_id) dispatch(fetchNotificationProfile({id: id , student_id: student_id}))
    } , [id , student_id])


    return (
        <div className={cls.notification}>

            <div className={cls.notification__box}>
                {data?.map(item => (
                    <div className={cls.notification__box_item}>
                        <div dangerouslySetInnerHTML={{__html: item.description}}></div>
                        <div className={cls.notification__box_item_time}>{item.created_at}</div>
                    </div>

                ))}
            </div>

        </div>
    );
}
