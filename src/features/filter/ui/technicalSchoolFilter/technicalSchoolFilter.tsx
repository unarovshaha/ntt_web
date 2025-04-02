import React, { useEffect, useState } from 'react';
import cls from './technicalSchoolFilter.module.sass';
import { Switch } from "shared/ui/switch";
import { Button } from "shared/ui/button";
import { fetchHomeTechnical } from "entities/home/model/thunk/homeThunk";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { HeaderItem } from "entities/home/model/schema/homeSchema";
import { Input } from "shared/ui/input";

export const TechnicalSchoolFilter = ({ item }: { item: HeaderItem }) => {
    const [active, setActive] = useState<boolean>(false);
    const [handle, setHandle] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const [priceMin, setPriceMin] = useState(0);
    const [priceMax, setPriceMax] = useState(1000000);

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
        if (priceMin || priceMax || active || handle || item.id) {
            dispatch(fetchHomeTechnical({
                priceMax: priceMax,
                priceMin: priceMin,
                grand: active,
                stipendiya: handle,
                organizationId: item.id
            }));
        }
    }, [priceMin, priceMax, active, handle, item.id]);

    return (
        <div className={cls.main}>
            <div className={cls.main__header}>
                <Input
                    name="minprice"
                    type="number"
                    value={priceMin.toString()} // Stringga aylantirish
                    onChange={onChangePriceMin}
                    placeholder="Min narx"
                />
                <Input
                    name="maxprice"
                    type="number"
                    value={priceMax.toString()} // Stringga aylantirish
                    onChange={onChangePriceMax}
                    placeholder="Max narx"
                />
            </div>
            <div className={cls.main__section}>
                <h2>Grant mavjud</h2>
                <Switch activeSwitch={active} onChangeSwitch={onChange} disabled={false} />
            </div>
            {/*<div className={cls.main__section}>*/}
            {/*    <h2>Stipendiya mavjud</h2>*/}
            {/*    <Switch activeSwitch={handle} onChangeSwitch={onHandle} disabled={false}/>*/}
            {/*</div>*/}
        </div>
    );
};