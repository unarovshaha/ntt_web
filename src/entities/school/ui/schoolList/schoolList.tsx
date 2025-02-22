import React from 'react';

import {Card} from "shared/lib/components/card/card";

import cls from "./schoolList.module.sass";

export const SchoolList = () => {

    const renderList = () => {
        return [1, 2, 3, 4, 5, 6, 7].map(item => {
            return (
                <Card/>
            )
        })
    }

    return (
        <div className={cls.schoolList}>
            {renderList()}
        </div>
    );
}
