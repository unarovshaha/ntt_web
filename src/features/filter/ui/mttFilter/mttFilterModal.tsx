import React, {useCallback, useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import {getDirectionsData} from "entities/oftenUsed";
import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Radio} from "shared/ui/radio";
import {Accordion} from "shared/ui/accordion";

import cls from "../filterModal.module.sass";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";

interface IModalProps {
    active: boolean,
    setActive: (arg: boolean) => void
}

export const MttFilterModal = ({active, setActive}: IModalProps) => {

    const dispatch = useAppDispatch()
    const directions = useSelector(getDirectionsData)

    const [selectedRadio, setSelectedRadio] = useState<number>(NaN)
    const [selectedLocations, setSelectedLocations] = useState<number[]>([])
    const [selectedLanguages, setSelectedLanguages] = useState<number[]>([])
    const [minSalary, setMinSalary] = useState<string>()
    const [maxSalary, setMaxSalary] = useState<string>()

    useEffect(() => {
        if (selectedLanguages || selectedRadio || selectedLocations || minSalary || maxSalary) {
            // dispatch()
        }
    }, [selectedLanguages, selectedRadio, selectedLocations, minSalary, maxSalary])

    const getSelectedRadio = useCallback((id: number) => setSelectedRadio(id), [])
    const getSelectedLocations = useCallback((id: number[]) => setSelectedLocations(id), [])
    const getSelectedLanguages = useCallback((id: number[]) => setSelectedLanguages(id), [])
    const getMaxSalary = useCallback((data: string) => setMaxSalary(data), [])
    const getMinSalary = useCallback((data: string) => setMinSalary(data), [])

    const renderList = () => {
        return directions.map(item => {
            return (
                <Radio
                    label={item.name}
                    name={"radio"}
                    value={item.id}
                    onChange={getSelectedRadio}
                />
            )
        })
    }

    return (
        <Modal
            active={active}
            setActive={setActive}
            title={"Filter"}
            extraClass={cls.filterModal}
        >
            <h2>Kontrakt to’lov</h2>
            <div className={cls.filterModal__input}>
                <Input onChange={getMinSalary} placeholder={"Min"} name={"min"}/>
                <Input onChange={getMaxSalary} placeholder={"Max"} name={"max"}/>
            </div>
            <h2>Yo’nalish</h2>
            <div className={cls.filterModal__radio}>
                {renderList()}
            </div>
            <Accordion title={"Manzil"} items={[]} onClick={getSelectedLocations}/>
            <Accordion title={"Til"} items={[]} onClick={getSelectedLanguages}/>
        </Modal>
    );
}
