import React, {useState} from 'react';
import cls from './technicalSchoolFilter.module.sass'
import {Switch} from "shared/ui/switch";
import {Button} from "shared/ui/button";
import {Range} from "shared/ui/range";
export const TechnicalSchoolFilter = () => {
    const [active, setActive] = useState<boolean>(false)
    const [handle, setHandle] = useState<boolean>(false)

    const onCHange = () => {
        setActive(!active)
    }
    const onHandle = () => {
        setHandle(!handle)
    }
    return (
        <div className={cls.main}>
            <div className={cls.main__header}>
                <Range/>
            </div>
            <div className={cls.main__section}>
                <h2>Grant mavjud</h2>
                <Switch activeSwitch={active} onChangeSwitch={onCHange} disabled={false}/>
            </div>
            <div className={cls.main__section}>
                <h2>Stipendiya mavjud</h2>
                <Switch activeSwitch={handle} onChangeSwitch={onHandle} disabled={false}/>
            </div>

        </div>
    );
};

