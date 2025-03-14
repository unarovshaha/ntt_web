import React from 'react';

import {DirectionCard} from "shared/lib/components/directionCard/directionCard";

import cls from "entities/study/ui/studyDirectionList/studyDirectionList.module.sass";
import classNames from "classnames";

interface IDirectionList {
    setActive: (arg:boolean)=>void,
    active: boolean
}

export const StudyDirectionList = ({active, setActive}:IDirectionList) => {

    const renderList = () => {
        return [1, 2, 3, 4, 5].map((item, index) => {
            return <DirectionCard key={index}/>
        })
    }

    return (
        <div className={cls.direction}>
            {renderList()}
            <div
                className={classNames(cls.direction__filter, {
                    [cls.active]: active
                })}
                onClick={() => setActive(true)}
            >
                <i className="fa-solid fa-filter"/>
            </div>
        </div>
    );
}
