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

    const [active, setActive] = useState(degreeList ? degreeList[0]?.id : null)

    const dispatch = useAppDispatch()


    useEffect(() => {


        const yearsId = years ? years[0]?.id : null


        if (id || active) dispatch(fetchHomeProfileDegreeItem({id: id, yearId: yearsId ? yearsId : 2, degreeId: active}))
    }, [active])


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
                    <li>Ta'lim tili <span>{item?.education_language?.name}</span></li>
                    <li>Ta’lim shakli <span>{item?.shift?.name}</span></li>
                    <li>Ta’lim narxi <span>{item?.price}</span></li>
                    <li>Ta’lim turi <span>{item?.degree?.organization_type?.name}</span></li>
                    <li>Boshlanish vaqti <span>{item?.start_date}</span></li>
                    <li>Tugash vaqti <span>{item?.expire_date}</span></li>

                </ul>

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

    return (
        <div style={{display: "flex", gap: "2rem"}}>
            <div className={cls.info}><NewProfilePersonal/></div>


            <div className={cls.direction}>

                <div className={cls.direction__list}>
                    {degreeList?.map(item => (
                        <h2 onClick={() => {
                            setActive(item.id)
                        }} className={classNames({
                            [cls.active]: item.id === active
                        })}>{item.name}</h2>
                    ))}


                </div>
                {render}
            </div>

        </div>
    );
}
