import React from 'react';
import cls from './userNotifications.module.sass'
import {Box} from "shared/ui/box";
import univerIcon from 'shared/assets/images/ubs.png'
import {useNavigate} from "react-router-dom";
import {getNotificationPageRoute} from "shared/const/routers";

const list = [
    {
        id: 1,
        title: "University of Business and Science ",
        content: "Siz University of Business and Sciencega qabul qilindingiz !! ",
        image: univerIcon,
        date: "24.15.2024 15:33"
    }, {
        id: 2,
        title: "University of Business and Science ",
        content: "Siz University of Business and Sciencega qabul qilindingiz !! ",
        image: univerIcon,
        date: "24.15.2024 15:33"
    }, {
        id: 3,
        title: "University of Business and Science ",
        content: "Siz University of Business and Sciencega qabul qilindingiz !! ",
        image: univerIcon,
        date: "24.15.2024 15:33"
    }, {
        id: 4,
        title: "University of Business and Science ",
        content: "Siz University of Business and Sciencega qabul qilindingiz !! ",
        image: univerIcon,
        date: "24.15.2024 15:33"
    }, {
        id: 4,
        title: "University of Business and Science ",
        content: "Siz University of Business and Sciencega qabul qilindingiz !! ",
        image: univerIcon,
        date: "24.15.2024 15:33"
    }, {
        id: 4,
        title: "University of Business and Science ",
        content: "Siz University of Business and Sciencega qabul qilindingiz !! ",
        image: univerIcon,
        date: "24.15.2024 15:33"
    },
]
export const UserNotifications = () => {

    const navigate = useNavigate()


    return (
        <div className={cls.container}>
            <h1>Bildirishnomalar</h1>
            <div className={cls.container__arounder}>
                {
                    list.map((item, index) => (
                        <Box onClick={() => navigate(`notification`)} extraClass={cls.container__arounder__box}>
                            <div className={cls.container__arounder__box__firstLayer}>
                                <img src={item.image} alt=""/>
                                <h2>{item.title}</h2>
                            </div>
                            <h3>{item.content}</h3>
                            <h4>{item.date}</h4>
                        </Box>
                    ))
                }

            </div>
        </div>
    );
};


export const NotificationProfile = () => {
    return (
        <div>
            <div className={cls.container}>
                <h1>Bildirishnomalar</h1>
                <div className={cls.container__arounder}>
                    <Box extraClass={cls.container__arounder__box}>
                        <div className={cls.container__arounder__box__firstLayer}>
                            <img src={univerIcon} alt=""/>
                            <h2>University of Business and Science </h2>
                        </div>
                        <h1>Siz University of Business and Sciencega qabul qilindingiz !!Siz University of Business and
                            Sciencega qabul qilindingiz !!Siz University of Business and Sciencega qabul qilindingiz
                            !!Siz University of Business and Sciencega qabul qilindingiz !!Siz University of Business
                            and Sciencega qabul qilindingiz !!Siz University of Business and Sciencega qabul qilindingiz
                            !!Siz University of Business and Sciencega qabul qilindingiz !!Siz University of Business
                            and Sciencega qabul qilindingiz !!Siz University of Business and Sciencega qabul qilindingiz
                            !! ss and Sciencega qabul qilindingiz !!Siz University of Business and Sciencega qabul
                            qilindingiz !!Siz University of Business and Sciencega qabul qilindingiz !!
                            ss and Sciencega qabul qilindingiz !!Siz University of Business and Sciencega qabul
                            qilindingiz !!Siz University of Business and Sciencega qabul qilindingiz </h1>
                        <h4>24.15.2024 15:33</h4>
                    </Box>
                </div>
            </div>
        </div>
    )
}
