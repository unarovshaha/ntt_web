import React, {useEffect, useState} from 'react';


import cls from "./newProfileDirection.module.sass";

import {useSelector} from "react-redux";
import {
    getHomeProfileDegreeList,
    getHomeProfileItem,
    getHomeProfileLanding, getHomeProfileYears
} from "entities/home/model/selector/homeSelector";
import {API_URL_DOC,} from "shared/api/base";

import {useNavigate} from "react-router-dom";
import {NewProfilePersonal} from '../newProfilePersonal/newProfilePersonal';
import classNames from "classnames";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchHomeProfileDegree, fetchHomeProfileDegreeItem} from "../../../home/model/thunk/homeThunk";
import {useParams} from "react-router";
import {Select} from "shared/ui/select";
import {Modal} from "shared/ui/modal";
import {EducationRecord} from "entities/home/model/schema/homeSchema";

export const NewProfileDirection = () => {

    const data = useSelector(getHomeProfileLanding)
    const years = useSelector(getHomeProfileYears)
    const degreeList = useSelector(getHomeProfileDegreeList)
    const {id} = useParams()
    const dataItem = useSelector(getHomeProfileItem)

    const [activeModal, setActiveModal] = useState(false)
    const [activeItem, setActiveItem] = useState<EducationRecord>()

    const navigate = useNavigate()

    const [active, setActive] = useState()
    const [activeYear, setActiveYear] = useState()

    const activeMenu = localStorage.getItem("activeMenu")
    useEffect(() => {
        if (degreeList?.length) setActive(degreeList[0]?.id)
    }, [degreeList])
    useEffect(() => {
        if (years?.length) setActiveYear(years[0]?.id)
    }, [years])

    const dispatch = useAppDispatch()


    useEffect(() => {
        if (id || active || activeYear) {
            dispatch(fetchHomeProfileDegreeItem({id: id, yearId: activeYear, degreeId: active}))
        }
    }, [activeYear, active])


    console.log(activeItem , 'log ')

    const renderData = () => {
        return data?.map(item => (
            <div
                // onClick={() => navigate(`profile/${item.id}/about`)}
                className={cls.profile__footer_container_box}
            >

                <div className={cls.profile__footer_container_box_header}>
                    <img src={`${dataItem?.img}`} alt=""/>
                    <h2>{item?.field?.name}</h2>
                </div>
                   <ul>
                       <li>Ta'lim tili <span>{item?.education_language?.map((item, index, arr) => <span>
                        {item.name} {index !== arr.length - 1 && "\\"}
                    </span>)}</span></li>
                       <li>
                           Ta'lim shakli{" "}
                           <span>
                                    {item?.shift?.map((shiftItem, index, arr) => (
                                        <span key={index}>
                                        {shiftItem.name}
                                            {index !== arr.length - 1 && "\\"}
                                        </span>
                                    ))}~
                                </span>
                       </li>
                       <li>{activeMenu === "/Universitet" ? "Kontrakt summasi " : "To'lov summasi "}
                           <span>{item?.price.toLocaleString()}</span></li>
                       <li>Boshlanish vaqti <span>{item?.start_date.replace(/-/g, ".")}</span></li>
                       <h3
                           onClick={() => {
                               localStorage.setItem("landingId", String(item.id))
                               navigate(`/register`)
                               // console.log()
                           }}
                           className={cls.box__link}
                       >
                           Hujjat topshirish
                       </h3>
                   </ul>

                <div className={cls.profile__footer_container_box_right}>
                    <i onClick={() => {
                        setActiveModal(true)
                        setActiveItem(item)
                    }} className={`fa-solid fa-chevron-right ${cls.profile__footer_container_box_right_icon}`}/>
                </div>
            </div>
        ))
    }

    const render = renderData()
    const yearOptions = years?.map(years => ({
        id: years?.id,
        name: years?.date,
    }));
    return (
        <div style={{display: "flex", gap: "2rem"}}>
            {window.innerWidth > 700 && <div className={cls.info}><NewProfilePersonal/></div>}


            <div className={cls.direction}>

                <div className={cls.direction__filter}>
                    <div className={cls.direction__list}>
                        {degreeList?.map(item => (
                            <h2 onClick={() => {
                                setActive(item.id)
                            }} className={classNames({
                                [cls.active]: item.id === active
                            })}>{item.name}</h2>
                        ))}
                    </div>

                    <Select setSelectOption={setActiveYear} optionsData={yearOptions}/>


                </div>
                <div className={cls.direction__main}>
                    {render}
                </div>
            </div>

            <Modal extraClass={cls.modal} title={"Qo'shimcha ma'lumot"} active={activeModal} setActive={setActiveModal}>
                <div>
                    <h1>Ma'lumotlar</h1>

                    <h2 dangerouslySetInnerHTML={{__html: activeItem?.desc || ''}}/>

                </div>
                <div>
                    <h1>Talablar</h1>

                    <h2 dangerouslySetInnerHTML={{__html: activeItem?.requirements || ''}}/>

                </div>

            </Modal>

        </div>
    );
}