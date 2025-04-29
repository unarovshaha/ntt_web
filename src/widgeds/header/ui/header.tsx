import React, {useEffect, useMemo} from 'react';
import {useLocation} from "react-router";
import {useSelector} from "react-redux";

import {
    fetchAcademicYear,
    getAcademicYear,
    getCurrentAcademicYear,
    oftenUsedActions
} from "entities/oftenUsed";
import {Select} from "shared/ui/select";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {menuConfig} from "../../menuBar";

import cls from './header.module.sass'

export const Header = () => {

    const dispatch = useAppDispatch()
    const {pathname} = useLocation()
    const {getCurrentYear} = oftenUsedActions
    const academicYears = useSelector(getAcademicYear)
    const currentYear = useSelector(getCurrentAcademicYear)

    useEffect(() => {
        dispatch(fetchAcademicYear())
    }, [])

    const currentLocation = useMemo(() =>
            menuConfig.filter(item => item.to === pathname.slice(10, pathname.length))[0]?.label
        , [pathname])

    const onChangeYear = (id: number) => {
        dispatch(getCurrentYear(id))
    }

    return (
        <div className={cls.header}>
            <Select
                extraClass={cls.header__select}
                selectOption={currentYear ?? 1}
                optionsData={
                    academicYears.map(item => ({
                        id: item.id,
                        name: item.date
                    }))
                }
                setSelectOption={onChangeYear}
            />
            {/*<h2>{currentLocation}</h2>*/}

            {/*<div className={cls.header__menu}>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*</div>*/}
        </div>
    );
};

