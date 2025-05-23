import React, {useEffect, useMemo, useState} from 'react';

import {Card} from "shared/lib/components/card/card";

import cls from "entities/study/ui/studySchoolList/studySchoolList.module.sass";
import classNames from "classnames";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchStudySchoolList} from "entities/study/model/studyThunk";
import {useSelector} from "react-redux";
import {getStudyLoading, getStudySchoolList} from "entities/study/model/studySelector";
import {useParams} from "react-router";
import {Loader} from "shared/ui/loader";
import {Pagination} from "features/pagination";

interface ISchoolList {
    setActive: (arg: boolean) => void,
    active: boolean
}

export const StudySchoolList = ({setActive, active}: ISchoolList) => {

    const {id} = useParams()
    const dispatch = useAppDispatch()
    const schoolList = useSelector(getStudySchoolList)
    const loading = useSelector(getStudyLoading)
    const pageSize = useMemo(() => 10, [])
    const [currentPage, setCurrentPage] = useState<number>(1)

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return schoolList?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, schoolList, pageSize]);



    useEffect(() => {
        if (id) {
            dispatch(fetchStudySchoolList({id}))
        }
    }, [id])

    const renderList = () => {
        return currentTableData?.map((item, index) => {
            return (
                <Card
                    route={`/platform/study/profile/`}
                    id={item?.id}
                    name={item.name}
                    priceMax={item.landing?.price_max}
                    priceMin={item.landing?.price_min}
                    region={item.locations}
                    image={item.img}
                    startDate={item?.start_date}
                    endDate={item?.expire_date}
                    desc={item?.desc}
                    rating={item?.rating}
                    key={index}
                />
            )
        })
    }

    return (
        <div
            className={classNames(cls.schoolList, {
                [cls.active] : loading
            })}
        >
            {
                loading
                    ? <Loader/>
                    : renderList()
            }
            <Pagination
                totalCount={schoolList?.length || 0}
                onPageChange={setCurrentPage}
                currentPage={currentPage}
                pageSize={pageSize}
            />
            <div
                className={classNames(cls.schoolList__filter, {
                    [cls.active]: active
                })}
                onClick={() => setActive(true)}
            >
                <i className="fa-solid fa-filter"/>
            </div>
        </div>
    );
}
