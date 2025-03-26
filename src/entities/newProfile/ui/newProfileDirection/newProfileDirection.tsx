import React from 'react';

import {Button} from "shared/ui/button";

import cls from "./newProfileDirection.module.sass";
import image from "shared/assets/images/Ellipse 118.png";
import {useSelector} from "react-redux";
import {getHomeProfileLanding} from "entities/home/model/selector/homeSelector";

export const NewProfileDirection = () => {

    const data = useSelector(getHomeProfileLanding)
    console.log(data)
    return (
        <div className={cls.direction}>

            {data?.map(item => (
                <div className={cls.direction__item}>
                    {item.name}
                </div>
            ))}
        </div>
    );
}
