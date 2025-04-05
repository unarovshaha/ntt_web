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
        fetchLanguages,
        clearFilter,
        clearLocations,
        clearLanguage
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
        dispatch(fetchLanguagesData())
    }, [])

    useEffect(() => {
        if (id) {
            dispatch(fetchDirectionsData({id}))
            dispatch(clearFilter())
            setSelectedDirection(undefined)
            setSelectedLocations([])
            setSelectedLanguages([])
            setMinSalary(undefined)
            setMaxSalary(undefined)
        }
    }, [id])

    const [selectedDirection, setSelectedDirection] = useState<number>()
    const [selectedLocations, setSelectedLocations] = useState<number[]>([])
    const [selectedLanguages, setSelectedLanguages] = useState<number[]>([])
    const [minSalary, setMinSalary] = useState<string>()
    const [maxSalary, setMaxSalary] = useState<string>()

    const getDirection = (data: number) => {
        if (data) {
            dispatch(fetchStudySchoolList({
                id,
                language: selectedLanguages,
                region: selectedLocations,
                price_min: minSalary,
                price_max: maxSalary,
                shift: data
            }))
            setSelectedDirection(data)
            if (JSON.stringify(data) !== JSON.stringify(isDirection))
                dispatch(fetchDirection(data))
        }
    }
    const getSelectedLocations = (data: number[]) => {
        if (!!data.length) {
            if (JSON.stringify(data) !== JSON.stringify(isLocation)) {
                dispatch(fetchStudySchoolList({
                    id,
                    language: selectedLanguages,
                    region: data,
                    price_min: minSalary,
                    price_max: maxSalary,
                    shift: selectedDirection
                }))
                dispatch(fetchLocations(data))
            }
        }
        setSelectedLocations(data)
    }

    const onClearLocation = (data: number) => {
        dispatch(clearLocations(data))
        dispatch(fetchStudySchoolList({
            id,
            language: selectedLanguages,
            region: selectedLocations.filter(item => item !== data),
            price_min: minSalary,
            price_max: maxSalary,
            shift: selectedDirection
        }))
    }

    const getSelectedLanguages = (data: number[]) => {
        if (!!data.length) {
            if (JSON.stringify(data) !== JSON.stringify(isLanguages)) {
                dispatch(fetchStudySchoolList({
                    id,
                    language: data,
                    region: selectedLocations,
                    price_min: minSalary,
                    price_max: maxSalary,
                    shift: selectedDirection
                }))
                dispatch(fetchLanguages(data))
            }
        }
        setSelectedLanguages(data)
    }

    const onClearLanguages = (data: number) => {
        dispatch(clearLanguage(data))
        dispatch(fetchStudySchoolList({
            id,
            language: selectedLanguages.filter(item => item !== data),
            region: selectedLocations,
            price_min: minSalary,
            price_max: maxSalary,
            shift: selectedDirection
        }))
    }

    const getMaxSalary = (data: string) => {
        // if (data) {
            dispatch(fetchStudySchoolList({
                id,
                language: selectedLanguages,
                region: selectedLocations,
                price_min: minSalary,
                price_max: data,
                shift: selectedDirection
            }))
            setMaxSalary(data)
            if (JSON.stringify(data) !== JSON.stringify(isMaxSalary))
                dispatch(fetchMaxSalary(data))
        // }
    }
    const getMinSalary = (data: string) => {
        // if (data) {
            dispatch(fetchStudySchoolList({
                id,
                language: selectedLanguages,
                region: selectedLocations,
                price_min: data,
                price_max: maxSalary,
                shift: selectedDirection
            }))
            setMinSalary(data)
            if (JSON.stringify(data) !== JSON.stringify(isMinSalary))
                dispatch(fetchMinSalary(data))
        // }
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
                    checked={item.id === (selectedDirection ?? isDirection)}
                    // checked={item.id === selectedDirection}
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
                <Input
                    defaultValue={isMinSalary}
                    onChange={getMinSalary}
                    placeholder={"Min"}
                    name={"min"}
                />
                <Input
                    defaultValue={isMaxSalary}
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
                onDisActive={onClearLocation}
                extraClass={cls.filterModal__accordion}
                defaultChecked={isLocation}
                title={"Manzil"}
                items={locations}
                onClick={getSelectedLocations}
            />
            <Accordion
                onDisActive={onClearLanguages}
                extraClass={cls.filterModal__accordion}
                defaultChecked={isLanguages}
                title={"Til"}
                items={languages}
                onClick={getSelectedLanguages}
            />
        </Modal>
    );
}
