import React from 'react';

import {Button} from "shared/ui/button";

import cls from "./mttGrant.module.sass";
import image from "shared/assets/images/Grant 1.png";

export const MttGrant = () => {
    return (
        <div className={cls.grant}>
            <div className={cls.item}>
                <img className={cls.item__image} src={image} alt=""/>
                <div className={cls.item__container}>
                    <Button extraClass={cls.item__btn}>Toshkent viloyati</Button>
                    <div className={cls.item__wrapper}>
                        <p className={cls.item__date}>10.22.2025</p>
                        <h1 className={cls.item__title}>
                            100% moliyalashtirilgan grant UDEA-Coventry tomonidan
                        </h1>
                    </div>
                    <p className={cls.item__text}>
                        100% moliyalashtirilgan grant, suhbatdan muvaffaqiyatli o‘tgan talabaga
                        4 yil davomida to‘liq taqdim etiladi. Grantga ariza berish jarayoni:
                        Hujjatlaringizni topshiring. UDEAdagi Koventri universiteti (Buyuk Britaniya)
                        dasturlaridan biriga muvaffaqiyatli qabul qilining. “Agrobank” ATB vakillari
                        bilan suhbatdan* o'ting. Suhbat vaqti: Bizning operatorlarimiz sizga qo'ng'iroq
                        qiladi
                    </p>
                </div>
            </div>
        </div>
    );
}
