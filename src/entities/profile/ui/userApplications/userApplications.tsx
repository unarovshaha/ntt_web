import React, {JSX, useCallback, useEffect, useState} from 'react';
import cls from './userApplications.module.sass'
import {Box} from "shared/ui/box";
import univerIcon from 'shared/assets/images/ubs.png'
import locationIcon from 'shared/assets/icons/location.png'
import expectedIcon from 'shared/assets/icons/pending.png'
import {Button} from "shared/ui/button";
import {useWindowSize} from "@react-hook/window-size";

const listData = [

    {id: "allRequest", label: "Hamma ariza"},
    {id: "newRequest", label: "Yangi ariza"},
    {id: "acceptRequest", label: "Qabul qilingan"},
    {id: "rejectRequest", label: "Rad etilgan"},
    {id: "returnRequest", label: "Tahrirlashga qaytarilgan"},
    {id: "invitedRequest", label: "Imtihonga chaqirilgan"}
]

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
        }, {
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
        }, {
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
        }, {
            id: 1,
            image: univerIcon,
            name: "University of Business and Science",
            location: "Namangan viloyati",
            degree: "Bakalavriat",
            type: "Kunduzgi",
            language: "O'zbek tili",
            price: "12 090 000",
            statusSymbol: <i className="fa-solid fa-check"/>,
            status: "Qabul qilingan",
            color: "#34C759"
        },
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
            statusSymbol: <i className="fa-solid fa-xmark"/>,
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

interface IApplicationProps {
    types?: {
        name: string,
        id: number
    }[],
    setActiveType: (arg: string) => void,
    list?: {
        name: string,
        id: number,
        date: string,
        degree: string,
        field: string,
        language: string,
        phone: string,
        shift: string
    }[]
}

interface IActiveStyle {
    color: string,
    icon?: JSX.Element
}

export const UserApplications = ({types, setActiveType, list}: IApplicationProps) => {

    const [activeTab, setActiveTab] = useState('allRequest');
    const [activeStyle, setActiveStyle] = useState<IActiveStyle>({color: "black", icon: undefined});
    const activeIndex = listData.findIndex(tab => tab.id === activeTab);
    const [layout, setLayout] = useState<boolean>(false)
    const size = useWindowSize()

    useEffect(() => {
        setActiveType("allRequest")
    }, [])

    useEffect(() => {
        if ((size[0] > 480 && !layout) || (size[0] <= 480 && layout)) {
            setLayout(size[0] > 480);
        }
    }, [size, layout])

    useEffect(() => {
        switch (activeTab) {
            case "acceptRequest":
                setActiveStyle({color: "#34C759", icon: <i className="fa-solid fa-check"/>})
                break
            case "newRequest":
                setActiveStyle({color: "#0059ff", icon: <i className="fa-solid fa-plus"/>})
                break
            case "rejectRequest":
                setActiveStyle({color: "#FF3B30", icon: <i className="fa-solid fa-xmark"/>})
                break
            case "returnRequest":
                setActiveStyle({color: "#fffc30", icon: <i className="fa-solid fa-arrow-rotate-left"/>})
                break
            case "invitedRequest":
                setActiveStyle({color: "#fffc30", icon: <i className="fa-solid fa-headset"/>})
                break
            default:
                setActiveStyle({color: "black", icon: undefined})
        }
    }, [activeTab])

    const renderPCList = () => {
        return list?.map(item => {
            return (
                <Box extraClass={cls.container__dataBoxs__boxs}>
                    <div className={cls.container__dataBoxs__boxs__firstLayer}>
                        <div className={cls.container__dataBoxs__boxs__firstLayer__imgBox}>
                            {/*<img src={item.image} alt=""/>*/}
                        </div>
                        <div className={cls.container__dataBoxs__boxs__firstLayer__content}>
                            <h2>
                                {item.field}
                            </h2>
                            <div className={cls.container__dataBoxs__boxs__firstLayer__imgBox__content__locBox}>
                                <img src={locationIcon} alt=""/>
                                {/*<h3>{item.location}</h3>*/}
                                <h3>Chirchiq</h3>
                            </div>

                        </div>
                    </div>
                    <div className={cls.container__dataBoxs__boxs__secondLayer}>
                        <div className={cls.container__dataBoxs__boxs__secondLayer__content}>
                            <h2>Daraja</h2>
                            <h3>{item.degree}</h3>
                        </div>
                        <div className={cls.container__dataBoxs__boxs__secondLayer__content}>
                            <h2>Ta’lim turi</h2>
                            <h3>{item.shift}</h3>
                        </div>
                        <div className={cls.container__dataBoxs__boxs__secondLayer__content}>
                            <h2>Ta’lim tili</h2>
                            <h3>{item.language}</h3>
                        </div>
                        <div className={cls.container__dataBoxs__boxs__secondLayer__content}>
                            <h2>Ta’lim narxi</h2>
                            <h3>10000</h3>
                            {/*<h3>{item.price}</h3>*/}
                        </div>
                        <div className={cls.container__dataBoxs__boxs__secondLayer__content}>
                            <h2>Manzil</h2>
                            <h3>Viloyat</h3>
                            {/*<h3>{item.location}</h3>*/}
                        </div>
                    </div>
                    <div className={cls.container__dataBoxs__boxs__thirdLayer}>
                        {
                            activeTab === "allRequest" ? null :
                                <Button
                                    extraClass={cls.container__dataBoxs__boxs__thirdLayer__btn}
                                >
                                    <span style={{color: activeStyle.color}}>
                                        {activeStyle.icon}
                                        {
                                            listData.filter(item => item.id === activeTab)[0]?.label
                                        }
                                    </span>
                                </Button>
                        }
                    </div>
                </Box>
            )
        })
    }

    const renderMobileList = () => {
        return list?.map(item => {
            return (
                <Box extraClass={cls.container__dataBox__box}>
                    <div className={cls.container__dataBox__box__firstLayer}>
                        <div className={cls.container__dataBox__box__firstLayer__imgBox}>
                            {/*<img src={item.image} alt=""/>*/}
                        </div>
                        <div className={cls.container__dataBox__box__firstLayer__content}>
                            <h2>
                                {
                                    item.field.length > 30 ?
                                        `${item.field.slice(0, 30)}...` :
                                        item.field
                                }
                            </h2>
                            <div
                                className={cls.container__dataBox__box__firstLayer__imgBox__content__locBox}>
                                <img src={locationIcon} alt=""/>
                                {/*<h3>{item.location}</h3>*/}
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
                            {/*<h3>{item.type}</h3>*/}
                        </div>
                        <div className={cls.container__dataBox__box__secondLayer__content}>
                            <h2>Ta’lim tili</h2>
                            <h3>{item.language}</h3>
                        </div>
                        <div className={cls.container__dataBox__box__secondLayer__content}>
                            <h2>Ta’lim narxi</h2>
                            {/*<h3>{item.price}</h3>*/}
                        </div>
                        <div className={cls.container__dataBox__box__secondLayer__content}>
                            <h2>Manzil</h2>
                            {/*<h3>{item.location}</h3>*/}
                        </div>
                    </div>
                    <div className={cls.container__dataBox__box__thirdLayer}>
                        {/*<Button*/}
                        {/*    extraClass={cls.container__dataBox__box__thirdLayer__btn}*/}
                        {/*    children={<span*/}
                        {/*        style={{color: item.color}}>{item.statusSymbol} {item.status}</span>}*/}
                        {/*/>*/}
                    </div>
                </Box>
            )
        })
    }

    return (
        <div className={cls.container}>
            <h1>Arizalarim</h1>
            <div className={cls.tabs}>
                <ul>
                    {/*{types.map((tab) => (*/}
                    {listData.map((tab) => (
                        <li
                            key={tab.id}
                            className={`${cls.tab} ${activeTab === tab.id ? cls.active : ""}`}
                            onClick={() => {
                                setActiveTab(tab.id)
                                setActiveType(tab.id)
                            }}
                        >
                            {tab.label}lar
                        </li>
                    ))}

                </ul>
                <div className={cls.activeIndicator} style={{left: `${activeIndex * 16.66}%`}}/>

            </div>
            {
                layout ?
                    <div className={cls.container__dataBoxs}>
                        {renderPCList()}
                    </div>
                    :
                    <div className={cls.container__dataBox}>
                        {renderMobileList()}
                    </div>
            }


        </div>
    );
};

