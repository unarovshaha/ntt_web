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
import {useAppDispatch} from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchHomeProfileDegree, fetchHomeProfileDegreeItem} from "../../../home/model/thunk/homeThunk";
import {useParams} from "react-router";
import {Select} from "../../../../shared/ui/select";

export const NewProfileDirection = () => {

    const data = useSelector(getHomeProfileLanding)
    const years = useSelector(getHomeProfileYears)
    const degreeList = useSelector(getHomeProfileDegreeList)
    const {id} = useParams()
    const dataItem = useSelector(getHomeProfileItem)

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


    const renderData = () => {
        return data?.map(item => (
            <div
                // onClick={() => navigate(`profile/${item.id}/about`)}
                className={cls.profile__footer_container_box}
            >

                <div className={cls.profile__footer_container_box_header}>
                    <img src={`${dataItem?.img}`} alt=""/>
                    <h2>{item?.organization?.name}</h2>
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
                                    ))}
                                </span>
                    </li>
                    <li>{activeMenu === "/Universitet" ? "Kontrakt summasi " : "To'lov summasi "} <span>{item?.price}</span></li>
                    <li>Ta’lim turi <span>{item?.degree?.organization_type?.name}</span></li>
                    <li>Boshlanish vaqti <span>{item?.start_date}</span></li>
                    <li>Tugash vaqti <span>{item?.expire_date}</span></li>
                </ul>
                <div className={cls.profile__footer_container_box_middle}>
                    <div>
                        <h2>Ma'lumotlar</h2>
                        <div>
                            <p dangerouslySetInnerHTML={{__html: item?.desc || ''}}></p>
                        </div>
                    </div>
                    <div>
                        <h2>Talablar</h2>
                        <div>
                            <p dangerouslySetInnerHTML={{__html: item?.requirements || ''}}></p>
                        </div>
                    </div>
                </div>
                <div className={cls.profile__footer_container_box_footer}>
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
            <div className={cls.info}><NewProfilePersonal/></div>


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
                {render}
            </div>

        </div>
    );
}
