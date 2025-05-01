import React, {useEffect, useState} from 'react';
import cls from './technicalSchool.module.sass'
import univerImg from "shared/assets/images/Ellipse 118.png"
import {Switch} from "shared/ui/switch";
import {TechnicalSchoolFilter} from "features/filter";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getHomeTechnical} from "entities/home/model/selector/homeSelector";
import {HeaderItem} from "entities/home/model/schema/homeSchema";
import {Card} from "shared/lib/components/card/card";


export const TechnicalSchool = ({item}: { item: HeaderItem }) => {

    const navigate = useNavigate()


    const data = useSelector(getHomeTechnical)

    const menuName = localStorage.getItem("activeMenu")


    const formatSalary = (salary: string | number) => {
        return salary?.toLocaleString();
    };

    return (
        <div className={cls.main}>

            <TechnicalSchoolFilter item={item}/>
            {data?.map((item, index) => (
                <Card
                    rating={item.rating}
                    route={`profile/`}
                    name={item.name}
                    id={item.id}
                    image={item.img}
                    startDate={item.landing?.start_date}
                    desc={item.desc}
                    region={item.locations}
                    key={index}
                    priceMax={item.landing?.price_max}
                    priceMin={item.landing?.price_min}
                />
                // <div
                //     onClick={() => {
                //         navigate(`${item.id}/about`)
                //         localStorage.setItem("organizationID", String(item.id))
                //     }}
                //     className={cls.profile__footer_container_box}
                // >
                //
                //     <div className={cls.profile__footer_container_box_header}>
                //         <img src={item.img ? item.img : univerImg} alt=""/>
                //         <h2>{item.name}</h2>
                //     </div>
                //     <ul>
                //         <li>Ta'lim tili
                //             <span>
                //                     {item?.landing?.language?.map((shiftItem, index, arr) => (
                //                         <span key={index}>
                //                         {shiftItem}
                //                             {index !== arr.length - 1 && "\\"}
                //                             {window.innerWidth < 700 && <br/>}
                //                         </span>
                //                     ))}
                //                 </span>
                //         </li>
                //         <li>
                //             Ta'lim shakli{" "}
                //                 <span>
                //                     {item?.landing?.shift?.map((shiftItem, index, arr) => (
                //                         <span key={index}>
                //                         {shiftItem}
                //                         {index !== arr.length - 1 && "\\"}
                //                             {window.innerWidth < 700 && <br/>}
                //                         </span>
                //                     ))}
                //                 </span>
                //         </li>
                //         <li>Talablar <span style={{height: "2rem" , overflow: "hidden "}} dangerouslySetInnerHTML={{__html: item.landing?.requirements}}></span></li>
                //         <li>{menuName === '/Universitet' ? "Kontrakt to’lovi" : "To'lov summasi"}<div  className={cls.contract}><span>{formatSalary(item.landing?.price_min)}</span>-<span>{formatSalary(item.landing?.price_max)}</span></div> </li>
                //     </ul>
                //
                //     <div className={cls.profile__footer_container_box_footer}>
                //         <h3
                //             className={cls.box__link}
                //         >
                //             Batafsil <i className={"fa fa-arrow-right"}/>
                //         </h3>
                //
                //     </div>
                //
                //
                // </div>
            ))}

        </div>
    );
};

