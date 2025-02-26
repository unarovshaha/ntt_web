import React, {useEffect, useState} from 'react';
import cls from './profile.module.sass'
import {Input} from "shared/ui/input";
import {useWindowSize} from "@react-hook/window-size";


const list = [
    {
        title: 'Ism-familiya',
        value: "Shaha Unarov"
    },
    {
        title: "Passport seria",
        value: "AD1341241"
    },
    {
        title: "JSHSHR",
        value: "50505050505050"
    },
    {
        title: "Jinsi",
        value: "Erke"
    },
    {
        title: "Telefon raqami",
        value: "+998975899897"
    },
    {
        title: "Tug'ilgan sanasi",
        value: "05.06.2006"
    },
    {
        title: "Tug'ilgan joyi",
        value: "Chirchiq shahri"
    },
    {
        title: "ELektron pochtasi",
        value: "saturnmaestro@gmail.com"
    }

]
export const Profile = () => {

    const [layout, setLayout] = useState<boolean>(false)
    const size = useWindowSize()

    useEffect(() => {
        if ((size[0] > 480 && !layout) || (size[0] <= 480 && layout)) {
            setLayout(size[0] > 480);
        }
    }, [size, layout])
    return (
        <div className={cls.container}>
            <h1>Shaxsiy ma'lumotlarim</h1>
            {
                layout ?
                    <div className={cls.container__arounder}>
                        {
                            list.map(item => (
                                <Input extraClass={cls.container__arounder__input} name={"name"} title={item.title} value={item.value}/>
                            ))
                        }
                    </div>
                    :
                    <div className={cls.container__box}>
                        {
                            list.map(item => (
                                <Input name={"name"} title={item.title} value={item.value}/>
                            ))
                        }
                    </div>
            }


        </div>
    );
};

