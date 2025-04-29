import React from 'react';
import classNames from "classnames";

import {Card} from "shared/lib/components/card/card";

import cls from "./studyMttList.module.sass";

interface IMttListProps {
    setActive: (arg:boolean)=>void,
    active: boolean
}

export const StudyMttList = ({setActive, active}: IMttListProps) => {

    const renderList = () => {
        return [1, 2, 3, 4, 5, 6, 7].map((item, index) => {
            // return (
                // <Card key={index}/>
            // )
        })
    }

    return (
        <div className={cls.mttList}>
            {/*{renderList()}*/}
            <div
                className={classNames(cls.mttList__filter, {
                    [cls.active]: active
                })}
                onClick={() => setActive(true)}
            >
                <i className="fa-solid fa-filter"/>
            </div>
        </div>
    );
}
