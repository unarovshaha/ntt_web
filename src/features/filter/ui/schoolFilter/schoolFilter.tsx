import React, {useCallback, useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import {getDirectionsData} from "entities/oftenUsed";
import {Input} from "shared/ui/input";
import {Accordion} from "shared/ui/accordion";
import {Radio} from "shared/ui/radio";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchMttFilter} from "../../model/filterThunk";

import cls from "../filter.module.sass";

export const SchoolFilter = () => {

    const dispatch = useAppDispatch()
    const directions = useSelector(getDirectionsData)

    const [selectedDirection, setSelectedDirection] = useState<number>()
    const [selectedLocations, setSelectedLocations] = useState<number[]>([])
    const [selectedLanguages, setSelectedLanguages] = useState<number[]>([])
    const [minSalary, setMinSalary] = useState<string>()
    const [maxSalary, setMaxSalary] = useState<string>()

    useEffect(() => {
        if (selectedDirection || selectedLocations || selectedLanguages || minSalary || maxSalary) {
            dispatch(fetchMttFilter({}))
        }
    }, [selectedDirection, selectedLocations, selectedLanguages, minSalary, maxSalary])

    const getDirection = useCallback((data: number) => setSelectedDirection(data), [])
    const getMinSalary = useCallback((data: string) => setMinSalary(data), [])
    const getMaxSalary = useCallback((data: string) => setMaxSalary(data), [])
    const onGetLocation = useCallback((data: number[]) => setSelectedLocations(data), [])
    const onGetLanguage = useCallback((data: number[]) => setSelectedLanguages(data), [])

    const renderRadios = () => {
        return directions.map((item, index) => {
            return (
                <Radio
                    key={index}
                    name={"radio"}
                    label={item.name}
                    value={item.id}
                    onChange={getDirection}
                    checked={item.id === selectedDirection}
                />
            )
        })
    }

    return (
        <div className={cls.container}>
            <h1 className={cls.container__title}>Filter</h1>
            <div className={cls.container__items}>
                <h2 className={cls.container__subTitle}>Oylik to'lov</h2>
                <div className={cls.inputs}>
                    <Input onChange={getMinSalary} placeholder={"Min"} type={"number"} name={"min"}/>
                    <Input onChange={getMaxSalary} placeholder={"Max"} type={"number"} name={"max"}/>
                </div>
            </div>
            <div className={cls.container__items}>
                <h2 className={cls.container__subTitle}>Yo'nalish</h2>
                <div className={cls.radios}>
                    {renderRadios()}
                </div>
            </div>
            <Accordion title={"Manzil"} items={[{id: 1, name: "hello"}]} onClick={onGetLocation}/>
            <Accordion title={"Til"} items={[{id: 1, name: "hello"}]} onClick={onGetLanguage}/>
        </div>
    );
}
