import React from 'react';

import cls from "./notificationItem.module.sass";
import image from "shared/assets/logo/Group 7.png";
import TextEditor from "entities/textEditor/TextEditor";
import {Button} from "shared/ui/button";
import img from "shared/assets/icons/send-2.svg"
export const NotificationItem = () => {

    return (
        <div className={cls.notification}>


            <div className={cls.notification__text}>
                {/*// @ts-ignore*/}
                <TextEditor extraClass={cls.notification__text_item} isSubmit={true}/>
                {/*<Button><img src={img} alt=""/></Button>*/}

            </div>

        </div>
    );
}
