import React, {useCallback, useState} from 'react';
import {useSelector} from "react-redux";

import {getDirectionsData} from "entities/oftenUsed";
import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Radio} from "shared/ui/radio";
import {Accordion} from "shared/ui/accordion";

import cls from "../filterModal.module.sass";

interface IModalProps {
    active: boolean,
    setActive: (arg: boolean) => void
}

export const OtmSecondFilterModal = ({active, setActive}: IModalProps) => {

    const directions = useSelector(getDirectionsData)

    const [selectedDirection, setSelectedDirection] = useState<number>()
    const [selectedLocations, setSelectedLocations] = useState<number[]>([])
    const [selectedLanguages, setSelectedLanguages] = useState<number[]>([])
    const [selectedStudyTypes, setSelectedStudyTypes] = useState<number[]>([])

    const getDirection = useCallback((data: number) => setSelectedDirection(data), [])
    const getSelectedLocations = useCallback((id: number[]) => setSelectedLocations(id), [])
    const getSelectedLanguages = useCallback((id: number[]) => setSelectedLanguages(id), [])
    const getSelectedStudyTypes = useCallback((data: number[]) => setSelectedStudyTypes(data), [])

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
        <Modal
            active={active}
            setActive={setActive}
            title={"Filter"}
            extraClass={cls.filterModal}
        >
            <h2>Kontrakt to’lov</h2>
            <div className={cls.filterModal__input}>
                <Input placeholder={"Min"} name={"min"}/>
                <Input placeholder={"Max"} name={"max"}/>
            </div>
            <h2>Yo’nalish</h2>
            <div className={cls.filterModal__radio}>
                {renderRadios()}
            </div>
            <Accordion title={"Manzil"} items={[]} onClick={getSelectedLocations}/>
            <Accordion title={"Ta'lim turi"} items={[]} onClick={getSelectedStudyTypes}/>
            <Accordion title={"Til"} items={[]} onClick={getSelectedLanguages}/>
        </Modal>
    );
}
