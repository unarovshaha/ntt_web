import React, {useCallback, useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import {
    getLanguagesData,
    getLocationsData,
    getStudyTypesData
} from "entities/oftenUsed";
import {Input} from "shared/ui/input";
import {Accordion} from "shared/ui/accordion";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchMttFilter} from "../../model/filterThunk";

import cls from "../filter.module.sass";

export const OtmFilter = () => {

    const dispatch = useAppDispatch()
    const locations = useSelector(getLocationsData)
    const studyTypes = useSelector(getStudyTypesData)
    const languages = useSelector(getLanguagesData)

    const [selectedLocations, setSelectedLocations] = useState<number[]>([])
    const [selectedStudyTypes, setSelectedStudyTypes] = useState<number[]>([])
    const [selectedLanguages, setSelectedLanguages] = useState<number[]>([])
    const [minSalary, setMinSalary] = useState<string>()
    const [maxSalary, setMaxSalary] = useState<string>()

    useEffect(() => {
        if (selectedStudyTypes || selectedLocations || selectedLanguages || minSalary || maxSalary) {
            dispatch(fetchMttFilter({}))
        }
    }, [selectedLanguages, selectedStudyTypes, selectedLocations, minSalary, maxSalary])

    const getLocations = useCallback((data: number[]) => setSelectedLocations(data), [])
    const getStudyTypes = useCallback((data: number[]) => setSelectedStudyTypes(data), [])
    const getLanguages = useCallback((data: number[]) => setSelectedLanguages(data), [])
    const getMinSalary = useCallback((data: string) => setMinSalary(data), [])
    const getMaxSalary = useCallback((data: string) => setMaxSalary(data), [])

    return (
        <div className={cls.container}>
            <h1 className={cls.container__title}>Filter</h1>
            <div className={cls.container__items}>
                <h2 className={cls.container__subTitle}>Kontrakt to'lov</h2>
                <div className={cls.inputs}>
                    <Input onChange={getMinSalary} placeholder={"Min"} type={"number"} name={"min"}/>
                    <Input onChange={getMaxSalary} placeholder={"Max"} type={"number"} name={"max"}/>
                </div>
            </div>
            <Accordion title={"Manzil"} items={locations} onClick={getLocations}/>
            <Accordion title={"Talim turi"} items={studyTypes} onClick={getStudyTypes}/>
            <Accordion title={"Til"} items={languages} onClick={getLanguages}/>
        </div>
    );
}
