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

export const MttFilterModal = ({active, setActive}: IModalProps) => {

    const directions = useSelector(getDirectionsData)

    const [selectedRadio, setSelectedRadio] = useState<number>(NaN)
    const [selectedLocations, setSelectedLocations] = useState<number[]>([])
    const [selectedLanguages, setSelectedLanguages] = useState<number[]>([])

    const getSelectedRadio = useCallback((id: number) => setSelectedRadio(id), [])
    const getSelectedLocations = useCallback((id: number[]) => setSelectedLocations(id), [])
    const getSelectedLanguages = useCallback((id: number[]) => setSelectedLanguages(id), [])

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
            <h2>Oylik to’lov</h2>
            <div className={cls.filterModal__input}>
                <Input placeholder={"Min"} name={"min"}/>
                <Input placeholder={"Max"} name={"max"}/>
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
