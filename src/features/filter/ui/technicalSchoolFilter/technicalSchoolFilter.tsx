import React, {useEffect, useState} from 'react';
import cls from './technicalSchoolFilter.module.sass';
import {Switch} from "shared/ui/switch";
import {Button} from "shared/ui/button";
import {fetchDistrict, fetchFieldsItem, fetchHomeTechnical, fetchRegion} from "entities/home/model/thunk/homeThunk";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {HeaderItem} from "entities/home/model/schema/homeSchema";
import {Input} from "shared/ui/input";
import {useSelector} from "react-redux";
import {getDistrict, getFieldsItem, getHomeHeaderItem, getRegion} from "entities/home/model/selector/homeSelector";
import {Select} from "shared/ui/select";

export const TechnicalSchoolFilter = ({item}: { item: HeaderItem }) => {
    const [active, setActive] = useState<boolean>(false);
    const [handle, setHandle] = useState<boolean>(false);
    const [query, setQuery] = useState<string>('')
    const [select, setSelect] = useState()
    const [selectRegion, setSelectRegion] = useState()
    const [selectDistrict, setSelectDistrict] = useState()
    const dispatch = useAppDispatch();
    const [priceMin, setPriceMin] = useState(0);
    const [priceMax, setPriceMax] = useState(100000000000);
    const data = useSelector(getFieldsItem)
    const region = useSelector(getRegion)
    const district = useSelector(getDistrict)

    useEffect(() => {
        if (region) setSelectRegion(region[0]?.id)

    } , [region])
    useEffect(() => {
        if (district) setSelectDistrict(district[0]?.id)
    } , [district])

    console.log(selectDistrict , 'log')


    useEffect(() => {
        if (selectRegion)
            dispatch(fetchDistrict(selectRegion))
    } , [selectRegion])


    const onChangePriceMin = (value: string) => {
        const numValue = Number(value);
        setPriceMin(numValue);
    };

    const onChangePriceMax = (value: string) => {
        const numValue = Number(value);
        setPriceMax(numValue);
    };
    const onChangeSearch = (value: string) => {
        setQuery(value)
    }

    const onChange = () => {
        setActive(!active);
    };

    const onHandle = () => {
        setHandle(!handle);
    };

    useEffect(() => {
        dispatch(fetchFieldsItem())
        dispatch(fetchRegion())
    }, []);



    useEffect(() => {
        if (priceMin || priceMax || active || handle || item.id || query || selectRegion || selectDistrict) {
            dispatch(fetchHomeTechnical({
                priceMax: priceMax,
                priceMin: priceMin,
                grand: active,
                stipendiya: handle,
                organizationId: item.id,
                fieldId: select,
                value: query,
                district: selectDistrict,
                region: selectRegion
            }));
        }
    }, [priceMin, priceMax, active, handle, item.id, select, query , selectRegion , selectDistrict]);

    return (
        <div className={cls.main}>
            <div className={cls.main__headers}>
                <Select extraClass={cls.main__headers__select} setSelectOption={setSelect} optionsData={data}/>
                <Select extraClass={cls.main__headers__select} setSelectOption={setSelectRegion} optionsData={region}/>
                <Select extraClass={cls.main__headers__select} setSelectOption={setSelectDistrict}
                        optionsData={district}/>
            </div>

            <div className={cls.main__header}>
                <Input
                    extraClass={cls.main__header__input}
                    name="minprice"
                    type="number"
                    title={"Boshlang'ich narx"}
                    value={priceMin.toString()}
                    onChange={onChangePriceMin}
                    placeholder="Min narx"
                />
                <Input
                    extraClass={cls.main__header__input}
                    name="maxprice"
                    type="number"
                    title={"Maksimal narx"}
                    value={priceMax.toString()}
                    onChange={onChangePriceMax}
                    placeholder="Max narx"
                />
                <Input
                    extraClass={cls.main__header__input}
                    title={"Tezkor qidiruv"}
                    name={"search"}
                    onChange={onChangeSearch}
                    placeholder={"Qidiruv..."}
                />
            </div>

            <div className={cls.main__section}>
                <h2>Grant mavjud</h2>
                <Switch activeSwitch={active} onChangeSwitch={onChange} disabled={false}/>
            </div>

        </div>
    );
};