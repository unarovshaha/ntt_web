import React from 'react';
import cls from './userEducation.module.sass'
import {Box} from "shared/ui/box";
import univerIcon from 'shared/assets/images/ubs.png'
import {Input} from "shared/ui/input";


const list = [
    {
        title: "Ta'lim narxi",
        value: "12 090 000"
    },
    {
        title: "Daraja",
        value: "Bakalavr"
    },
    {
        title: "Manzil",
        value: "Toshkent shahri"
    },
    {
        title: "Ta'lim turi",
        value: "Sirtqi"
    },
    {
        title: "Ta'lim tili",
        value: "O'zbek"
    },
    {
        title: "Kurs",
        value: "1"
    }

]
export const UserEducation = () => {
    return (
        <div className={cls.container}>
            <h1>Ta’lim ma’lumotlari</h1>
            <Box extraClass={cls.container__box}>
                <img src={univerIcon} alt=""/>
                <h3>Toshkent Davlat Iqtisodiyot Universiteti</h3>
            </Box>
            <div className={cls.container__arounder}>
                {
                    list.map(item => (
                        <Input name={"name"} title={item.title} value={item.value}/>
                    ))
                }
            </div>

        </div>
    );
};

