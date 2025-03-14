import React, {useCallback, useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import {
    fetchDirectionsData,
    fetchLanguagesData,
    fetchLocationsData,
    fetchStudyTypesData,
    getDirectionsData, getLanguagesData,
    getLocationsData
} from "entities/oftenUsed";
import {Modal} from "shared/ui/modal";
import {Input} from "shared/ui/input";
import {Radio} from "shared/ui/radio";
import {Accordion} from "shared/ui/accordion";

import cls from "../filterModal.module.sass";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchStudySchoolList} from "entities/study";
import {useParams} from "react-router";
import {filterActions} from "../../model/filterSlice";
import {
    getFilterDirection,
    getFilterLanguages,
    getFilterLocations, getFilterMaxSalary,
    getFilterMinSalary
} from "features/filter/model/filterSelector";

interface IModalProps {
    active: boolean,
    setActive: (arg: boolean) => void
}

export const SchoolFilterModal = ({active, setActive}: IModalProps) => {

    const {id} = useParams()
    const dispatch = useAppDispatch()
    const {
        fetchMinSalary,
        fetchMaxSalary,
        fetchDirection,
        fetchLocations,
        fetchLanguages
    } = filterActions
    const directions = useSelector(getDirectionsData)
    const locations = useSelector(getLocationsData)
    const languages = useSelector(getLanguagesData)
    const isLocation = useSelector(getFilterLocations)
    const isLanguages = useSelector(getFilterLanguages)
    const isDirection = useSelector(getFilterDirection)
    const isMinSalary = useSelector(getFilterMinSalary)
    const isMaxSalary = useSelector(getFilterMaxSalary)

    useEffect(() => {
        dispatch(fetchLocationsData())
        dispatch(fetchDirectionsData())
        dispatch(fetchLanguagesData())
    }, [])

    const [selectedDirection, setSelectedDirection] = useState<number>()
    const [selectedLocations, setSelectedLocations] = useState<number[]>([])
    const [selectedLanguages, setSelectedLanguages] = useState<number[]>([])
    const [minSalary, setMinSalary] = useState<string>()
    const [maxSalary, setMaxSalary] = useState<string>()

    const getDirection = (data: number) => {
        dispatch(fetchStudySchoolList({
            id,
            language: selectedLanguages,
            region: selectedLocations,
            price_min: minSalary,
            price_max: maxSalary,
            shift: data
        }))
        setSelectedDirection(data)
        dispatch(fetchDirection(data))
    }
    const getSelectedLocations = (data: number[]) => {
        dispatch(fetchStudySchoolList({
            id,
            language: selectedLanguages,
            region: data,
            price_min: minSalary,
            price_max: maxSalary,
            shift: selectedDirection
        }))
        setSelectedLocations(data)
        dispatch(fetchLocations(data))
    }
    const getSelectedLanguages = (data: number[]) => {
        dispatch(fetchStudySchoolList({
            id,
            language: data,
            region: selectedLocations,
            price_min: minSalary,
            price_max: maxSalary,
            shift: selectedDirection
        }))
        setSelectedLanguages(data)
        dispatch(fetchLanguages(data))
    }
    const getMaxSalary = (data: string) => {
        dispatch(fetchStudySchoolList({
            id,
            language: selectedLanguages,
            region: selectedLocations,
            price_min: minSalary,
            price_max: data,
            shift: selectedDirection
        }))
        setMaxSalary(data)
        dispatch(fetchMaxSalary(data))
    }
    const getMinSalary = (data: string) => {
        dispatch(fetchStudySchoolList({
            id,
            language: selectedLanguages,
            region: selectedLocations,
            price_min: data,
            price_max: maxSalary,
            shift: selectedDirection
        }))
        setMinSalary(data)
        dispatch(fetchMinSalary(data))
    }

    const renderRadios = () => {
        return directions.map((item, index) => {
            return (
                <Radio
                    key={index}
                    name={"radio"}
                    label={item.name}
                    value={item.id}
                    onChange={getDirection}
                    // checked={item.id === (selectedDirection??isDirection)}
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
            <h2>Oylik to’lov</h2>
            <div className={cls.filterModal__input}>
                <Input
                    // defaultValue={isMinSalary}
                    onChange={getMinSalary}
                    placeholder={"Min"}
                    name={"min"}
                />
                <Input
                    // defaultValue={isMaxSalary}
                    onChange={getMaxSalary}
                    placeholder={"Max"}
                    name={"max"}
                />
            </div>
            <h2>Yo’nalish</h2>
            <div className={cls.filterModal__radio}>
                {renderRadios()}
            </div>
            <Accordion
                // defaultChecked={isLocation}
                title={"Manzil"}
                items={locations}
                onClick={getSelectedLocations}
            />
            <Accordion
                // defaultChecked={isLanguages}
                title={"Til"}
                items={languages}
                onClick={getSelectedLanguages}
            />
        </Modal>
    );
}
