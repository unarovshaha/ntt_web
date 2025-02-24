import React from 'react';

import {DirectionCard} from "shared/lib/components/directionCard/directionCard";

import cls from "./schoolDirection.module.sass";

export const SchoolDirection = () => {
    return (
        <div className={cls.direction}>
            <DirectionCard/>
            <DirectionCard/>
            <DirectionCard/>
            <DirectionCard/>
        </div>
    );
}
