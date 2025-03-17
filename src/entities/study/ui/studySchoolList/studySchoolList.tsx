import React, {useEffect} from 'react';

import {Card} from "shared/lib/components/card/card";

import cls from "entities/study/ui/studySchoolList/studySchoolList.module.sass";
import classNames from "classnames";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchStudySchoolList} from "entities/study/model/studyThunk";
import {useSelector} from "react-redux";
import {getStudyLoading, getStudySchoolList} from "entities/study/model/studySelector";
import {useParams} from "react-router";
import {Loader} from "shared/ui/loader";

interface ISchoolList {
    setActive: (arg: boolean) => void,
    active: boolean
}

export const StudySchoolList = ({setActive, active}: ISchoolList) => {

    const {id} = useParams()
    const dispatch = useAppDispatch()
    const schoolList = useSelector(getStudySchoolList)
    const loading = useSelector(getStudyLoading)

    useEffect(() => {
        if (id) {
            dispatch(fetchStudySchoolList({id}))
        }
    }, [id])

    const renderList = () => {
        return schoolList?.map((item, index) => {
            return (
                <Card
                    id={item.landing?.id}
                    name={item.name}
                    price={item.landing?.price}
                    region={item.region}
                    startDate={item.landing?.start_date}
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
