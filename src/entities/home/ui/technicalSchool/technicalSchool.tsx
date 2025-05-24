import React, {useEffect, useMemo, useState} from 'react';
import cls from './technicalSchool.module.sass'
import univerImg from "shared/assets/images/Ellipse 118.png"
import {Switch} from "shared/ui/switch";
import {TechnicalSchoolFilter} from "features/filter";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getHomeTechnical} from "entities/home/model/selector/homeSelector";
import {HeaderItem} from "entities/home/model/schema/homeSchema";
import {Card} from "shared/lib/components/card/card";
import {useLocation} from "react-router";
import {Pagination} from "features/pagination";


export const TechnicalSchool = ({item}: { item: HeaderItem }) => {

    const navigate = useNavigate()
    const location = useLocation()
    const pageSize = useMemo(() => 10, [])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const data = useSelector(getHomeTechnical)

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return data?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, data, pageSize]);
    return (
        <div className={cls.main}>

            <TechnicalSchoolFilter item={item}/>

            {currentTableData?.map((item, index) => (

                <Card
                    rating={item.rating}
                    route={`profile/`}
                    name={item.name}
                    id={item.id}
                    image={item.img}
                    startDate={item?.start_date}
                    endDate={item?.expire_date}
                    desc={item.desc}
                    region={item.locations}
                    key={index}
                    priceMax={item.landing?.price_max}
                    priceMin={item.landing?.price_min}
                    language={item.landing?.language}
                    shift={item.landing?.shift}
                    grant={item.landing?.grant}
                />

            ))}
            <Pagination
                totalCount={data?.length || 0}
                onPageChange={setCurrentPage}
                currentPage={currentPage}
                pageSize={pageSize}
            />

        </div>
    );
};

