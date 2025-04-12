import React from 'react';
import classNames from "classnames";

import {Card} from "shared/lib/components/card/card";

import cls from "./studyOtmList.module.sass";

interface IOtmListProps {
    setActive: (arg:boolean)=>void,
    active: boolean
}

export const StudyOtmList = ({active, setActive}: IOtmListProps) => {

    const renderList = () => {
        return [1, 2, 3, 4, 5, 6, 7].map((item, index) => {
            return (
                <Card key={index}/>
            )
        })
    }

    return (
        <div className={cls.otmList}>
            {renderList()}
            <div
                className={classNames(cls.otmList__filter, {
                    [cls.active]: active
                })}
                onClick={() => setActive(true)}
            >
                <i className="fa-solid fa-filter"/>
            </div>
        </div>
    );
}
