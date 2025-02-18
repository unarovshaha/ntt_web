import React, {useCallback, useState} from 'react';
import {useSelector} from "react-redux";

import {getDirectionsData} from "entities/oftenUsed";
import {Input} from "shared/ui/input";
import {Accordion} from "shared/ui/accordion";
import {Radio} from "shared/ui/radio";

import cls from "../mttFilter.module.sass";

export const OtmFilter = () => {

    return (
        <div className={cls.container}>
            <h1 className={cls.container__title}>Filter</h1>
            <div className={cls.container__items}>
                <h2 className={cls.container__subTitle}>Oylik to'lov</h2>
                <div className={cls.inputs}>
                    <Input name={"max"}/>
                    <Input name={"min"}/>
                </div>
            </div>
            {/*<Accordion title={"Manzil"} items={["hello"]}/>*/}
            {/*<Accordion title={"Talim turi"} items={["hello"]}/>*/}
            {/*<Accordion title={"Til"} items={["hello"]}/>*/}
        </div>
    );
}
