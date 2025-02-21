import React, {useState} from 'react';
import cls from './userApplications.module.sass'
import {Box} from "shared/ui/box";
import univerIcon from 'shared/assets/images/ubs.png'
import locationIcon from 'shared/assets/icons/location.png'
import expectedIcon from 'shared/assets/icons/pending.png'
import {Button} from "shared/ui/button";

const tabs = [
    {id: 1, title: "Ko'rib chiqilmoqda"},
    {id: 2, title: "Rad etildi"},
    {id: 3, title: "Qabul qilindi"},
];

const list = {
    accepted: [
        {
            id: 1,
            image: univerIcon,
            name: "University of Business and Science",
            location: "Namangan viloyati",
            degree: "Bakalavriat",
            type: "Kunduzgi",
            language: "O'zbek tili",
            price: "12 090 000",
            statusSymbol: <i className="fa-solid fa-check"></i>,
            status: "Qabul qilingan",
            color: "#34C759"
        }
    ],
    rejected: [
        {
            id: 1,
            image: univerIcon,
            name: "University of Business and Science",
            location: "Namangan viloyati",
            degree: "Bakalavriat",
            type: "Kunduzgi",
            language: "O'zbek tili",
            price: "12 190 000",
            statusSymbol: <i className="fa-solid fa-xmark"></i>,
            status: "Rad etilgan",
            color: "#FF3B30"
        }
    ],
    expected: [
        {
            id: 1,
            image: univerIcon,
            name: "University of Business and Science",
            location: "Namangan viloyati",
            degree: "Bakalavriat",
            type: "Kunduzgi",
            language: "O'zbek tili",
            price: "12 190 000",
            statusSymbol: expectedIcon,
            status: "Ko'rib chiqilmoqda",
            color: "#004AAD"
        }
    ]
}

export const UserApplications = () => {

    const [activeTab, setActiveTab] = useState(3); // Dastlab "Qabul qilindi" aktiv
    const activeIndex = tabs.findIndex(tab => tab.id === activeTab); // Indexni topish
    return (
        <div className={cls.container}>
            <h1>Arizalarim</h1>
            <div className={cls.tabs}>
                <ul>
                    {tabs.map((tab) => (
                        <li
                            key={tab.id}
                            className={`${cls.tab} ${activeTab === tab.id ? cls.active : ""}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.title}
                        </li>
                    ))}

                </ul>
                <div className={cls.activeIndicator} style={{left: `${activeIndex * 33.33}%`}}/>

            </div>
            <div className={cls.container__dataBox}>
                {
                    activeTab === 3 ? list.accepted.map(item => (
                        <Box extraClass={cls.container__dataBox__box}>
                            <div className={cls.container__dataBox__box__firstLayer}>
                                <div className={cls.container__dataBox__box__firstLayer__imgBox}>
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className={cls.container__dataBox__box__firstLayer__content}>
                                    <h2>{item.name}</h2>
                                    <div className={cls.container__dataBox__box__firstLayer__imgBox__content__locBox}>
                                        <img src={locationIcon} alt=""/>
                                        <h3>{item.location}</h3>
                                    </div>

                                </div>
                            </div>
                            <div className={cls.container__dataBox__box__secondLayer}>
                                <div className={cls.container__dataBox__box__secondLayer__content}>
                                    <h2>Daraja</h2>
                                    <h3>{item.degree}</h3>
                                </div>
                                <div className={cls.container__dataBox__box__secondLayer__content}>
                                    <h2>Ta’lim turi</h2>
                                    <h3>{item.type}</h3>
                                </div>
                                <div className={cls.container__dataBox__box__secondLayer__content}>
                                    <h2>Ta’lim tili</h2>
                                    <h3>{item.language}</h3>
                                </div>
                                <div className={cls.container__dataBox__box__secondLayer__content}>
                                    <h2>Ta’lim narxi</h2>
                                    <h3>{item.price}</h3>
                                </div>
                                <div className={cls.container__dataBox__box__secondLayer__content}>
                                    <h2>Manzil</h2>
                                    <h3>{item.location}</h3>
                                </div>
                            </div>
                            <div className={cls.container__dataBox__box__thirdLayer}>
                                <Button
                                    extraClass={cls.container__dataBox__box__thirdLayer__btn}
                                    children={<span style={{color: item.color}}>{item.statusSymbol} {item.status}</span>}
                                />
                            </div>
                        </Box>
                    )) : activeTab === 2 ? list.rejected.map(item => (
                        <Box extraClass={cls.container__dataBox__box}>
                            <div className={cls.container__dataBox__box__firstLayer}>
                                <div className={cls.container__dataBox__box__firstLayer__imgBox}>
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className={cls.container__dataBox__box__firstLayer__content}>
                                    <h2>{item.name}</h2>
                                    <div className={cls.container__dataBox__box__firstLayer__imgBox__content__locBox}>
                                        <img src={locationIcon} alt=""/>
                                        <h3>{item.location}</h3>
                                    </div>

                                </div>
                            </div>
                            <div className={cls.container__dataBox__box__secondLayer}>
                                <div className={cls.container__dataBox__box__secondLayer__content}>
                                    <h2>Daraja</h2>
                                    <h3>{item.degree}</h3>
                                </div>
                                <div className={cls.container__dataBox__box__secondLayer__content}>
                                    <h2>Ta’lim turi</h2>
                                    <h3>{item.type}</h3>
                                </div>
                                <div className={cls.container__dataBox__box__secondLayer__content}>
                                    <h2>Ta’lim tili</h2>
                                    <h3>{item.language}</h3>
                                </div>
                                <div className={cls.container__dataBox__box__secondLayer__content}>
                                    <h2>Ta’lim narxi</h2>
                                    <h3>{item.price}</h3>
                                </div>
                                <div className={cls.container__dataBox__box__secondLayer__content}>
                                    <h2>Manzil</h2>
                                    <h3>{item.location}</h3>
                                </div>
                            </div>
                            <div className={cls.container__dataBox__box__thirdLayer}>
                                <Button
                                    extraClass={cls.container__dataBox__box__thirdLayer__btn}
                                    children={<span style={{color: item.color}}>{item.statusSymbol} {item.status}</span>}
                                />
                            </div>
                        </Box>
                    )) : activeTab === 1 ? list.expected.map(item => (
                        <Box extraClass={cls.container__dataBox__box}>
                            <div className={cls.container__dataBox__box__firstLayer}>
                                <div className={cls.container__dataBox__box__firstLayer__imgBox}>
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className={cls.container__dataBox__box__firstLayer__content}>
                                    <h2>{item.name}</h2>
                                    <div className={cls.container__dataBox__box__firstLayer__imgBox__content__locBox}>
                                        <img src={locationIcon} alt=""/>
                                        <h3>{item.location}</h3>
                                    </div>

                                </div>
                            </div>
                            <div className={cls.container__dataBox__box__secondLayer}>
                                <div className={cls.container__dataBox__box__secondLayer__content}>
                                    <h2>Daraja</h2>
                                    <h3>{item.degree}</h3>
                                </div>
                                <div className={cls.container__dataBox__box__secondLayer__content}>
                                    <h2>Ta’lim turi</h2>
                                    <h3>{item.type}</h3>
                                </div>
                                <div className={cls.container__dataBox__box__secondLayer__content}>
                                    <h2>Ta’lim tili</h2>
                                    <h3>{item.language}</h3>
                                </div>
                                <div className={cls.container__dataBox__box__secondLayer__content}>
                                    <h2>Ta’lim narxi</h2>
                                    <h3>{item.price}</h3>
                                </div>
                                <div className={cls.container__dataBox__box__secondLayer__content}>
                                    <h2>Manzil</h2>
                                    <h3>{item.location}</h3>
                                </div>
                            </div>
                            <div className={cls.container__dataBox__box__thirdLayer}>
                                <Button
                                    extraClass={cls.container__dataBox__box__thirdLayer__btn}
                                    children={<span style={{color: item.color}}><img src={item.statusSymbol} alt=""/> {item.status}</span>}
                                />
                            </div>
                        </Box>
                    )) : null
                }


            </div>


        </div>
    );
};

