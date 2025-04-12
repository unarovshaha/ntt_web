import React from 'react';

import cls from "./schoolGallery.module.sass";
import image from "shared/assets/images/Rectangle 640.png";

export const SchoolGallery = () => {
    return (
        <div className={cls.gallery}>
            <div className={cls.gallery__item}>
                <img src={image} alt="image"/>
            </div>
            <div className={cls.gallery__item}>
                <img src={image} alt="image"/>
            </div>
            <div className={cls.gallery__item}>
                <img src={image} alt="image"/>
            </div>
            <div className={cls.gallery__item}>
                <img src={image} alt="image"/>
            </div>
            <div className={cls.gallery__item}>
                <img src={image} alt="image"/>
            </div>
            <div className={cls.gallery__item}>
                <img src={image} alt="image"/>
            </div>
        </div>
    );
}
