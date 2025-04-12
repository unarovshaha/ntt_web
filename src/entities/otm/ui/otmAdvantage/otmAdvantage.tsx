import React from 'react';

import cls from "./otmAdvantage.module.sass";
import image from "shared/assets/images/3ndheromainpicture.png";

export const OtmAdvantage = () => {
    return (
        <div className={cls.advantage}>
            <div className={cls.advantage__image}>
                <img src={image} alt="Afzalliklar"/>
            </div>
            <div className={cls.advantage__content}>
                <h2 className={cls.btn}>Afzalliklar</h2>
                <div className={cls.info}>
                    <h1 className={cls.info__title}>
                        Bir vaqtni o’zida bir nechta universitetga hujjat topshirish mumkin
                    </h1>
                    <p className={cls.info__text}>
                        UBS har yili iqtidorli talabalarni qo‘llab-quvvatlash maqsadida bir necha miliard so‘mlik grantlar
                        e’lon qilib kelmoqda. O‘qishga kirishda grant kundguzgi ta’lim uchun joriy qilingan bo‘lib, 4 yil
                        uchun amal qiladi. Kirish imtihonlarida eng yuqori ball olgan talabgorlarga grant beriladi va
                        grantni qo‘lga kiritgan talabalar ro‘yxati qabul imtihonlari yakunlanganidan so‘ng rasmiy
                        sahifalarda e’lon qilinadi. talabalar ro‘yxati qabul imtihonlari yakunlanganidan so‘ng rasmiy
                        sahifalarda e’lon qilinadi.
                    </p>
                </div>
            </div>
        </div>
    );
}
