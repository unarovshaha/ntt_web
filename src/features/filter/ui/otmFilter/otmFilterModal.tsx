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

export const OtmFilterModal = ({active, setActive}: IModalProps) => {

    const directions = useSelector(getDirectionsData)

    const [selectedLocations, setSelectedLocations] = useState<number[]>([])
    const [selectedLanguages, setSelectedLanguages] = useState<number[]>([])
    const [selectedStudyType, setSelectedStudyType] = useState<number[]>()

    const getSelectedLocations = useCallback((id: number[]) => setSelectedLocations(id), [])
    const getSelectedLanguages = useCallback((id: number[]) => setSelectedLanguages(id), [])
    const getSelectedStudyType = useCallback((id: number[]) => setSelectedStudyType(id), [])

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
            <Accordion title={"Manzil"} items={[]} onClick={getSelectedLocations}/>
            <Accordion title={"Talim turi"} items={[]} onClick={getSelectedStudyType}/>
            <Accordion title={"Til"} items={[]} onClick={getSelectedLanguages}/>
        </Modal>
    );
}
