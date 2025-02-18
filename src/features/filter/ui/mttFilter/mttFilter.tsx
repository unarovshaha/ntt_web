import React, {useCallback, useState} from 'react';
import {useSelector} from "react-redux";

import {getDirectionsData} from "entities/oftenUsed";
import {Input} from "shared/ui/input";
import {Accordion} from "shared/ui/accordion";
import {Radio} from "shared/ui/radio";

import cls from "../mttFilter.module.sass";

export const MttFilter = () => {

    const directions = useSelector(getDirectionsData)

    const [selectedDirection, setSelectedDirection] = useState<number>()
    const [selectedLocations, setSelectedLocations] = useState<number[]>([])
    const [selectedLanguages, setSelectedLanguages] = useState<number[]>([])

    const getDirection = useCallback((data: number) => setSelectedDirection(data), [])

    const onGetLocation = useCallback((id: number) => {
        setSelectedLocations(prevState =>
            prevState.includes(id)
                ? prevState.filter(item => item !== id)
                : [...prevState, id]
        )
    }, [])

    const onGetLanguage = useCallback((id: number) => {
        setSelectedLanguages(prevState =>
            prevState.includes(id)
                ? prevState.filter(item => item !== id)
                : [...prevState, id]
        )
    }, [])

    const renderRadios = () => {
        return directions.map(item => {
            return (
                <Radio
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
                    <Input name={"max"}/>
                    <Input name={"min"}/>
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
