import React from 'react';

import cls from "./newProfileDirection.module.sass";
import image from "shared/assets/images/Ellipse 118.png";
import {Button} from "shared/ui/button";

export const NewProfileDirection = () => {
    return (
        <div className={cls.direction}>
            <div className={cls.direction__header}>
                <div className={cls.info}>
                    <img className={cls.info__image} src={image} alt=""/>
                    <h2 className={cls.info__title}>
                        Filologiya va tillarni o’qitish: <span>xitoy tili</span>
                    </h2>
                </div>
                <div className={cls.status}>
                    <p className={cls.status__date}> Qabul muddati: 1 yanvardan- 30 iyundan</p>
                    <p className={cls.status__region}>Toshkent shahri</p>
                </div>
            </div>
            <div className={cls.direction__info}>
                <h2 className={cls.title}>Yo’nalish haqida</h2>
                <p className={cls.text}>
                    Siz University of Business and Sciencega qabul qilindingiz !!Siz University of Business and
                    Sciencega
                    qabul qilindingiz !!Siz University of Business and Sciencega qabul qilindingiz !!Siz University of
                    Business and Sciencega qabul qilindingiz !!Siz University of Business and Sciencega qabul
                    qilindingiz !!Siz University of Business and Sciencega qabul qilindingiz !!Siz University of
                    Business and Sciencega qabul qilindingiz !!Siz University of Business and Sciencega qabul
                    qilindingiz !!Siz University of Business and Sciencega qabul qilindingiz !! ss and Sciencega qabul
                    qilindingiz !!Siz University of Business and Sciencega qabul qilindingiz !!Siz University of
                    Business and Sciencega qabul qilindingiz !!
                    ss and Sciencega qabul qilindingiz !!Siz University of Business and Sciencega qabul qilindingiz
                    !!Siz University of Business and Sciencega qabul qilindingiz
                </p>
            </div>
            <div className={cls.direction__info}>
                <h2 className={cls.title}>O’qish davomiyligi</h2>
                <p className={cls.text}>
                    <span>3 yil</span>
                    Ushbu yo’nalishni tamomlagan bitiruvchilarga davlat va nodavlat tibbiyot muassasalarida “Umumiy
                    amaliyot hamshirasi” bo’lib ishlash huquqi beriladi.
                </p>
            </div>
            <Button extraClass={cls.direction__btn}>Hujjat topshirish</Button>
        </div>
    );
}
