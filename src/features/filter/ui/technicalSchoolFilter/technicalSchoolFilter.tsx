import React, { useEffect, useState } from 'react';
import cls from './technicalSchoolFilter.module.sass';
import { Switch } from "shared/ui/switch";
import { Button } from "shared/ui/button";
import {fetchFieldsItem, fetchHomeTechnical} from "entities/home/model/thunk/homeThunk";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { HeaderItem } from "entities/home/model/schema/homeSchema";
import { Input } from "shared/ui/input";
import {useSelector} from "react-redux";
import {getFieldsItem, getHomeHeaderItem} from "entities/home/model/selector/homeSelector";
import {Select} from "shared/ui/select";

export const TechnicalSchoolFilter = ({ item }: { item: HeaderItem }) => {
    const [active, setActive] = useState<boolean>(false);
    const [handle, setHandle] = useState<boolean>(false);
    const [select, setSelect] = useState()
    const dispatch = useAppDispatch();
    const [priceMin, setPriceMin] = useState(0);
    const [priceMax, setPriceMax] = useState(1000000);
    const data = useSelector(getFieldsItem)

    console.log(select, 'select')

    console.log(data, 'ededed')


    const onChangePriceMin = (value: string) => {
        const numValue = Number(value);
        setPriceMin(numValue);
    };

    const onChangePriceMax = (value: string) => {
        const numValue = Number(value);
        setPriceMax(numValue);
    };

    const onChange = () => {
        setActive(!active);
    };

    const onHandle = () => {
        setHandle(!handle);
    };

    useEffect(() => {
        dispatch(fetchFieldsItem())
    }, []);

    useEffect(() => {
        if (priceMin || priceMax || active || handle || item.id) {
            dispatch(fetchHomeTechnical({
                priceMax: priceMax,
                priceMin: priceMin,
                grand: active,
                stipendiya: handle,
                organizationId: item.id,
                fieldId: select
            }));
        }
    }, [priceMin, priceMax, active, handle, item.id, select]);

    return (
        <div className={cls.main}>
            <div className={cls.main__header}>
                <Input
                    name="minprice"
                    type="number"
                    title={"Boshlang'ich narx"}
                    value={priceMin.toString()}
                    onChange={onChangePriceMin}
                    placeholder="Min narx"
                />
                <Input
                    name="maxprice"
                    type="number"
                    title={"Maksimal narx"}
                    value={priceMax.toString()}
                    onChange={onChangePriceMax}
                    placeholder="Max narx"
                />
            </div>
            <div className={cls.main__header}>

            <Select extraClass={cls.main__header__select} setSelectOption={setSelect} optionsData={data}/>
            </div>
            <div className={cls.main__section}>
                <h2>Grant mavjud</h2>
                <Switch activeSwitch={active} onChangeSwitch={onChange} disabled={false} />
            </div>

        </div>
    );
};