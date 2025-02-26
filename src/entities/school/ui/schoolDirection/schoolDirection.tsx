import React from 'react';

import {DirectionCard} from "shared/lib/components/directionCard/directionCard";

import cls from "./schoolDirection.module.sass";

export const SchoolDirection = () => {

    const renderList = () => {
        return [1, 2, 3, 4, 5].map((item, index) => {
            return <DirectionCard key={index}/>
        })
    }

    return (
        <div className={cls.direction}>
            {renderList()}
        </div>
    );
}
